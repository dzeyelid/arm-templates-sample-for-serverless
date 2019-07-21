const { ManagedIdentityCredential } = require("@azure/identity");
const { SecretsClient, Secret } = require("@azure/keyvault-secrets");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (!(req.query.key || (req.body && req.body.key)) ||
        !(req.query.value || (req.body && req.body.value))) {
        context.res = {
            status: 404,
            body: "Please pass a pair of key and value on the query string or in the request body"
        }
        return;
    }

    if (!process.env.APPSETTING_WEBSITE_SITE_NAME) {
        const message = 'This function can be run only on Azure with Managed Identity.';
        context.log(message);
        context.res = {
            status: 404,
            body: message
        }
        return;
    }

    const key = req.query.key ? req.query.key : req.body.key;    
    const value = req.query.value ? req.query.value : req.body.value;    

    const credential = new ManagedIdentityCredential();
    const url = `https://${process.env.VAULT_NAME}.vault.azure.net`;
    const client = new SecretsClient(url, credential);    
    try {
        let result = await client.setSecret(key, value);
    } catch (e) {
        context.res = {
            status: 500,
            body: {
                message: e.message
            }
        }
        return;
    }
    context.res = {
        body: {
            success: true
        }
    }
};