import { Injectable } from "@nestjs/common";
import { Kinesis } from "aws-sdk";
import * as AWS from 'aws-sdk'
import { CreateLikeDTO } from "src/dtos/like/create.lile.dto";

@Injectable()
export class LikeService{

    private readonly kinesisClient : Kinesis

    constructor( ){
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESSKEYID,
            secretAccessKey: process.env.AWS_SECRETACCESSKEY,
            region: process.env.AWS_REGION
        })
        this.kinesisClient = new Kinesis({region: process.env.AWS_REGION});
        
    }

    async putRecordToStream(createLikeDto : CreateLikeDTO){
       const params = {
        Data: Buffer.from(JSON.stringify(createLikeDto)) , 
        PartitionKey : createLikeDto.userID,
        StreamName : "data-stream-highlite"
        
       }

       try {
        await this.kinesisClient.putRecord(params).promise() ; 
        console.log("Data send successfully")
       } catch (error) {
        console.error("Failed to send data to Kinesis Client " , error);
        throw new Error("Failed to send data to kiensis") ; 
       }

    }

}