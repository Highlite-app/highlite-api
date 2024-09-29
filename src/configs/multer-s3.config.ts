import MulterS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';
import { awsConfig } from './aws.config';
import * as dotenv from 'dotenv';
dotenv.config();

export const multerS3Config = {
  storage: MulterS3({
    s3: new S3Client(awsConfig),
    bucket: process.env.AWS_S3_BUCKETNAME ? process.env.AWS_S3_BUCKETNAME : '',
    acl: 'public-read',
    key: (req: any, file: any, callback: any) => {
      const bucketFolder = file.mimetype.includes('video')
        ? '/videos'
        : '/images';
      const folder = process.env.AWS_S3_BUCKETFOLDER + bucketFolder;

      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');

      const fileName = `${folder}/${randomName}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
