import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class PresignedDto{

    @ApiProperty()
    @IsNotEmpty({message: 'Enter a fileName to proceed'})
    fileName: string ;

    @ApiProperty()
    @IsNotEmpty({message: 'Enter a fileType to proceed'})
    type :string ;

}