
import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class AmazonDynamoDBService {
    private readonly dynamoDB: AWS.DynamoDB.DocumentClient;

    constructor() {
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESSKEYID , 
            secretAccessKey: process.env.AWS_SECRETACCESSKEY , 
            region: process.env.AWS_REGION
        })
        this.dynamoDB = new AWS.DynamoDB.DocumentClient({ region: process.env.AWS_REGION });
    }

    async putItemtoDynamoDB(tabbleName: string, item: any) {
        const params = {
            TableName: tabbleName,
            Item: item
        };

        try {
            await this.dynamoDB.put(params).promise();
            console.log("Item added to DynamoDB table");
        } catch (error) {
            console.log("Error adding items to DynamoDB");
            throw error;
        }

    }
}