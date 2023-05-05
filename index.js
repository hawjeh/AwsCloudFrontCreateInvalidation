import { CloudFrontClient, CreateInvalidationCommand } from "@aws-sdk/client-cloudfront";
import { fromIni } from "@aws-sdk/credential-providers";

const cacheInvalidate = async (profile = 'default', distributionId, paths, filePath = './.aws/credentials', region = 'us-east-1') => {
    try {
        if (paths.length == 0) return;
        
        const client = new CloudFrontClient({
            credentials: fromIni({
                profile: profile,
                filepath: filePath,
            }),
            region: region
        });

        const input = {
            DistributionId: distributionId,
            InvalidationBatch: {
                CallerReference: String(new Date().getTime()),
                Paths: {
                    Quantity: paths.length,
                    Items: paths
                }
            }
        }

        const command = new CreateInvalidationCommand(input);
        const response = await client.send(command);
        console.log('Posted cloudfront invalidation, response is:');
        console.log(response);
    } catch (error) {
        console.log('Error: ');
        console.log(error);
    }
}

await cacheInvalidate('', '', ["/"]);
console.log('ok');