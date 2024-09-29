import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class EmailDto{
    @IsEmail({},{message: "Enter a valid email to proceed"})
    @IsNotEmpty({message: 'Enter a email to proceed'})
    @ApiProperty()
    email:string ;
}