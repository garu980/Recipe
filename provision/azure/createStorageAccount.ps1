#Example .\createStorageAccount.ps1 'claims-dev' 'claimsstoragedev'
Param(    
    [Parameter(Mandatory=$True,Position=0)]
    [string]$resourceGroup,
    [Parameter(Mandatory=$True,Position=1)]
    [string]$storageAccountName    
)

az storage account create --name $storageAccountName --resource-group $resourceGroup --sku "Standard_LRS"