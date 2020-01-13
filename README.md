# ARM templates sample for serverless

## Structure

![Structure](./docs/images/structure.png)

## Key points

### App service (Azure Functions)

- Do not allow to access the functions from the Internet
- The functions access to each service endpoints via the delegated subnet
  - Storage Accounts
  - Cosmos DB
- Use Key Vault reference in App settings

### Virtual machine

- Developers can access the VM through Azure Bastion only
- The VM can access to Azure Functions as a service endpoint

## How to deploy this resources

```powershell
$RESOURCE_GROUP="<Resource group name>"
$LOCATION="japaneast"

$TEMPLATE_URL="https://raw.githubusercontent.com/dzeyelid/arm-templates-sample-for-serverless/master/arm-templates"

az group create `
  --name ${RESOURCE_GROUP} `
  --location ${LOCATION}

az group deployment create `
  --resource-group ${RESOURCE_GROUP} `
  --name entry `
  --template-uri ${TEMPLATE_URL}/00_deploy.json `
  --parameters @arm-templates/parameters.json
```

## Getting started with Deploy button

Click me! :)

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fdzeyelid%2Farm-templates-sample-for-serverless%2Fmaster%2Farm-templates%2F%2F00_deploy.json)
