import { ApiProperty } from "@nestjs/swagger";

export class IDRequestDTO{

    @ApiProperty({type:String})
    id: string  ;
}