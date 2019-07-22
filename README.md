# arm-template-sample-for-serverless

## Getting started with Azure CLI

```bash
TEMPLATE_URL="https://raw.githubusercontent.com/dzeyelid/arm-template-sample-for-serverless/master"

RESOURCE_GROUP=<RESOURCE GROUP NAME>
LOCATION="japaneast"
PROJECT_NAME=<PROJECT NAME>
TENANT_ID=$(az account show --query tenantId --output tsv)
OBJECT_ID=<USER OBJECT ID>

az group create \
    --name $RESOURCE_GROUP \
    --location $LOCATION

az group deployment create \
    --resource-group $RESOURCE_GROUP \
    --template-uri $TEMPLATE_URL/template.json \
    --parameters \
        projectName=$PROJECT_NAME \
        keyVaultDefaultAccessPolicy="{\"tenantId\": \"$TENANT_ID\", \"objectId\": \"$OBJECT_ID\"}" \
        keyVaultDefaultSecret="{\"name\": \"default\", \"value\": \"This is default value\"}"
```

## Getting started with Deploy button

Click me! :)

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fdzeyelid%2Farm-template-sample-for-serverless%2Fmaster%2Ftemplate.json)
