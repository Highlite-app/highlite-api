import { ApiProperty } from "@nestjs/swagger";

export class DataDTO{

   @ApiProperty({description: "The data Payload to be send to Amazon Kinesis stream"})
   data: any ; 


    
}