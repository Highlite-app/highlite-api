import { Body, Controller, Post, UnauthorizedException, UseGuards } from "@nestjs/common";
import { AmazonKinesisService } from "./amazon.kinesis.service";
import { ApiTags } from "@nestjs/swagger";
import { DataDTO } from "src/dtos/aws.kinesis/data.dto";
import { AmazonDynamoDBService } from "./amazon.dyanmo.service";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { JwtAuthGuard } from "src/security/guards/jwt.guard";

@Controller('stream-data')
@ApiTags("Real Time Streaming")
export class AmazonKinesisController{

constructor(private readonly kinesisService: AmazonKinesisService ){}
@UseGuards(JwtAuthGuard)
@Post("stream-data")
async receiveStreamData(@Body() dataDto:DataDTO){
   try{
    
    const streamName = process.env.AWS_KINESIS_STREAM_NAME ? process.env.AWS_KINESIS_STREAM_NAME :''; 
    const tableName =  process.env.AWS_DYNAMO_DB_TABLE_NAME ?process.env.AWS_DYNAMO_DB_TABLE_NAME: '' ;  

  
    await this.kinesisService.putRecordToStreamAndMongDB(tableName  , streamName  , dataDto);
    return {message: "Stream Data received and send successfully"}

   }catch (error){
    //throw UnauthorizedException ; 
    console.log("Error receiving stream data ",error);
   }
}
    
}