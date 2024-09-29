import { ApiProperty } from "@nestjs/swagger";
import { stringList } from "aws-sdk/clients/datapipeline";

export class LoginUserDTO{

@ApiProperty()    
email: string ; 

@ApiProperty() 
provider: string;

@ApiProperty() 
providerId : string;
}