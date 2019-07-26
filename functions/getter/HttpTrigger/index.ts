import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { DefaultAzureCredential } from "@azure/identity"
import { SecretsClient } from "@azure/keyvault-secrets"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    if (!(req.query.key || (req.body && req.body.key))) {
        context.res = {
            status: 404,
            body: "Please pass a key on the query string or in the request body"
        }
        return;
    }

    const key = req.query.key ? req.query.key : req.body.key;
    const credential = new DefaultAzureCredential();
    const url = `https://${process.env.VAULT_NAME}.vault.azure.net`;
    const client = new SecretsClient(url, credential);

    try {
        const secret = await client.getSecret(key);
        context.res = {
            body: {
                success: true,
                data: {
                    secret: secret.value
                }
            }
        }
    } catch (e) {
        context.res = {
            status: 500,
            body: {
                success: false,
                data: {
                    message: e.message
                }
            }
        }
        return;
    }
};

export default httpTrigger;
