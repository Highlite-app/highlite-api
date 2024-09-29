import { Module } from "@nestjs/common";
import { AmazonKinesisController } from "./amazon.kinesis.controller";
import { AmazonKinesisService } from "./amazon.kinesis.service";
import { AmazonDynamoDBService } from "./amazon.dyanmo.service";

@Module({
    imports:[],
    controllers:[AmazonKinesisController],
    providers:[AmazonKinesisService , AmazonDynamoDBService]
})
export class AmazonKinesisModule{}