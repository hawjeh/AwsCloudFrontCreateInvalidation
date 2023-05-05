# AWS CloudFront Javascript SDK - Create Invalidation

1. Create a file /.aws/credential
2. Store the aws_access_key_id and aws_secret_access_key, reference [here](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-node-credentials-shared.html)
3. Run `npm install`
4. Fill in the profile, distributionId and paths at `await cacheInvalidate('', '', ["/"]);`
5. Run `npm run start`