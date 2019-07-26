const { DefaultAzureCredential } = require("@azure/identity");
const { SecretsClient } = require("@azure/keyvault-secrets");

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

    const key = req.query.key ? req.query.key : req.body.key;
    const value = req.query.value ? req.query.value : req.body.value;

    const credential = new DefaultAzureCredential();
    const url = `https://${process.env.VAULT_NAME}.vault.azure.net`;
    const client = new SecretsClient(url, credential);
    try {
        let result = await client.setSecret(key, value);
        context.res = {
            body: {
                success: true,
                value: 'value' in result ? result.value : 'hidden',
            }
        }
    } catch (e) {
        context.res = {
            status: 500,
            body: {
                message: e.message
            }
        }
        return;
    }
};