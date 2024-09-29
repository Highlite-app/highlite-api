import { Injectable } from "@nestjs/common";
import { Kinesis } from "aws-sdk"
import * as AWS from 'aws-sdk'
import { AmazonDynamoDBService } from "./amazon.dyanmo.service";
import { DataDTO } from "src/dtos/aws.kinesis/data.dto";
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class AmazonKinesisService {
    private readonly kinesis: Kinesis;
    private readonly dynamoDB: AWS.DynamoDB.DocumentClient
    private readonly dynamoDBService: AmazonDynamoDBService;

    constructor() {
        
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESSKEYID,
            secretAccessKey: process.env.AWS_SECRETACCESSKEY,
            region: process.env.AWS_REGION
        })
        this.kinesis = new Kinesis({ region: process.env.AWS_REGION })
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
    async putRecordToStreamAndMongDB(tableName: string, streamName: string, dataDTO: DataDTO) {

        const pk = uuid4()
        const params = {
            Data: JSON.stringify(dataDTO.data),
            PartitionKey: pk,
            StreamName: streamName
        };

        try {
            await this.kinesis.putRecord(params).promise();
            console.log("Data Send to Amazon Kinesis for streaming");
            await this.putItemtoDynamoDB(tableName, { ...dataDTO.data, pk });


        } catch (error) {
            console.log("Error putting data in Amazon Kinesis");
            throw error;
        }
    }

}