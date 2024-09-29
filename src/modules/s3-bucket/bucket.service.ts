import { S3Client, PutObjectCommand, S3ClientConfig } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Credentials } from "@aws-sdk/types";
import { fromIni } from "@aws-sdk/credential-provider-ini";
import { Body, Injectable } from "@nestjs/common";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { Sha256 } from "@aws-crypto/sha256-js";
import S3 from "aws-sdk/clients/s3";
import { v4 as uuid4 } from 'uuid';
@Injectable()
export class BucketService {
    private s3: S3;

    constructor() {
        this.s3 = new S3({
            apiVersion: "2006-03-01",
            accessKeyId: process.env.AWS_ACCESSKEYID,
            secretAccessKey: process.env.AWS_SECRETACCESSKEY,
            region: process.env.AWS_REGION,
            signatureVersion: "v4",
        });
    }


    async generatePresignedUrl(fileName: string, fileType: string): Promise<string> {

        try {
            const ex = (fileName as string).split("/")[1];

            const Key = `${uuid4()}.${ex}`;

            const s3Params = {
                Bucket: process.env.AWS_S3_BUCKETNAME,
                Key: fileName,
                Expires: 1800,
                ContentType: fileType,



            };


            const presignedUrl = await this.s3.getSignedUrl("putObject", s3Params); // Expires in 1 hour
            console.log("uploadUrl", presignedUrl);
            return presignedUrl;



        } catch (error) {
            console.log("Error generating presigned URL:", error);
            throw new Error("Failed to generate presigned URL");
        }
    }


    async generatePresignedUrlWithClient(fileName: string): Promise<string> {
        try {

            const s3Params = {
                Bucket: process.env.BUCKET_NAME,
                Key: uuid4(),
                Expires: 60,
                ContentType: 'image/png',
            };

            const presignedUrl = await this.s3.getSignedUrl("putObject", s3Params); // Expires in 1 hour
            return presignedUrl;

        } catch (e) {
            console.log("Error generating generatePresignedUrlWithClient URL:", e);
            throw new Error("Failed to generate generatePresignedUrlWithClient URL");
        }

    }
}
