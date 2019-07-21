# arm-template-sample-for-serverless

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
        keyVaultDefaultSecret="{\"name\": \"default\", \"value\": \"This is default value\"}" \
```
