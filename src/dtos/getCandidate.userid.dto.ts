
import { ApiProduces, ApiProperty } from '@nestjs/swagger';
import { IsNumber , IsNotEmpty } from 'class-validator';

export class getCandidateByUserIdDto{
    @ApiProperty()
     userId:string ; 
}