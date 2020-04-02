Param(
    [Parameter(Mandatory=$True,Position=3)]
    [string]$keyVaultName,
    [Parameter(Mandatory=$True,Position=2)]
    [string]$appName,
    [Parameter(Mandatory=$True,Position=1)]
    [string]$resourceGroupName
)

Write-Host "Giving app $appName access to key vault $keyVaultName in resource group $resourceGroupName"

$appIdentity = az webapp identity show --name $appName --resource-group $resourceGroupName | ConvertFrom-Json
if (-Not $appIdentity -Or -Not $appIdentity.principalId) {
    Write-Error "Unable to resolve app identity"
    EXIT 1 
}
$objectId = $appIdentity.principalId
Write-Host "Resolved app object id to $objectId"

$result = az keyvault set-policy --name $keyVaultName --object-id $objectId --key-permissions decrypt sign --secret-permissions get

# Check that access policies were successfully set.
# Result should contain the app's object id.
if (-Not $result -Or [string]$result -notlike "*$objectId*")
{
    Write-Error "Failed to set key vault policies"
    EXIT 1 
}

Write-Host "Successfully set key vault access policies"
