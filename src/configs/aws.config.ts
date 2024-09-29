import * as dotenv from 'dotenv';
dotenv.config();

/**
 * We use this as the generic credential for AWS services
 *
 */
export const awsConfig = {
  credentials: {
    accessKeyId: process.env.AWS_ACCESSKEYID ? process.env.AWS_ACCESSKEYID : '',
    secretAccessKey: process.env.AWS_SECRETACCESSKEY
      ? process.env.AWS_SECRETACCESSKEY
      : '',
  },
  region: process.env.AWS_REGION ? process.env.AWS_REGION : '',
};
