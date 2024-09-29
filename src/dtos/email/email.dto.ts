import { ApiProperty } from "@nestjs/swagger";
export class   SendEmailDTO{
    @ApiProperty()
    recipient: string ;

    //@ApiProperty({required: false})
    body: string ; 

   // @ApiProperty({required: false})
    subject: string ; 

}