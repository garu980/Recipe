Param(
    [Parameter(Mandatory = $True, Position = 2)]
    [string]$resourceGroup,
    [Parameter(Mandatory = $True, Position = 1)]
    [string]$appName    
)
Write-Host "Running the script"
$vstsWorkDir = $env:SYSTEM_DEFAULTWORKINGDIRECTORY
$vstsReleaseDefName = $env:RELEASE_DEFINITIONNAME

$artifactDir = "$($env:SYSTEM_DEFAULTWORKINGDIRECTORY)/Recipe release/drop"
$zip = Get-ChildItem -Path $artifactDir -Filter *.zip | Select-Object -First 1    
$zipPath = "$artifactDir/$($zip.Name)"
Write-Host "Deploying $zip"
# Bash and Powershell
$deploy = az webapp deployment source config-zip -g $resourceGroup -n $appName --src $zipPath
# status 4 = success - status 3 = failed
Write-Host "Deployment result $deploy"
Write-Host "Successfully deployed, now warming up and running health checks"

#get the credentials for running the command
$user = az webapp deployment list-publishing-profiles -n $appName -g $resourceGroup `
    --query "[?publishMethod=='MSDeploy'].userName" -o tsv

$pass = az webapp deployment list-publishing-profiles -n $appName -g $resourceGroup `
    --query "[?publishMethod=='MSDeploy'].userPWD" -o tsv
	
$creds = "$($user):$($pass)"
$encodedCreds = [System.Convert]::ToBase64String([System.Text.Encoding]::ASCII.GetBytes($creds))
$headers = @{ Authorization = "Basic $encodedCreds" }

$apiUrl = "https://$appName.scm.azurewebsites.net/api/command"

$commandBody = @{
    command = "powershell.exe -command `"cd D:\home\site\wwwroot & npm install`""
}

Invoke-RestMethod -Uri $apiUrl -Headers $headers -Method POST -ContentType "application/json" -Body (ConvertTo-Json $commandBody) | Out-Null 

$response = try { Invoke-WebRequest -Uri "https://$appName.azurewebsites.net/api/v1/get/health" -Method GET } catch { $_.Exception.Response }
$statusCode = [int]$response.StatusCode

if ($statusCode -ne 200) {
    $result = $response.GetResponseStream()
    $reader = New-Object System.IO.StreamReader($result)
    $reader.BaseStream.Position = 0
    $reader.DiscardBufferedData()
    $content = $reader.ReadToEnd();
    
    Write-Host "Application is sick, expected '200 OK', but received: '$statusCode'. Healthendpoint says: $content. See log for details."
    EXIT 1
}

Write-Host "Successfully deployed $appName"