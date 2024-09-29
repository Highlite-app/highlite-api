import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UrlReqiuestDto{

    @ApiProperty()
    @IsNotEmpty({message: 'Enter a fileName to proceed'})
    fileName:string ;
}