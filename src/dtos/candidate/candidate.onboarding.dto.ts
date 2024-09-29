import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsString , IsNotEmpty, IsArray, IsEnum, IsEmail } from 'class-validator';
import { CandidateWorkResponseDto } from './candidate.work.response.dto';
import { WorkTypeEnum } from 'src/enums/work.type.enum';
import { JobDurationEnum } from 'src/enums/job.duration.enum';

export class CandidateOnBoardingDto {

  @ApiProperty({example:'id'})
  candidateId:string ;
 
  @ApiProperty({example:"Srijan"})
  firstName: string;

 
  @ApiProperty({example:"Mukhopadhyay"})
  lastName: string;

 
  @ApiProperty({example:"Lead Flutter Developer"})
  position: string;

  @IsArray()
  @ApiProperty()
  skills: string[];


  @IsArray()
  @ApiProperty()
  tools: string[];

  @ApiProperty({ description: "WorkType Enum", example: WorkTypeEnum.remote, required: true })
  @IsEnum(WorkTypeEnum, { message: "Work Type must be remote, inOffice, or both" })
  workType: WorkTypeEnum;

 
  @ApiProperty({ description: "JobDuration Enum", example: JobDurationEnum.fullTime, required: true })
  @IsEnum(JobDurationEnum, { message: "Job Duration must be fullTime, partTime, or both" })
  @IsNotEmpty({ message: "JobDuration cannot be empty" })
  jobDuration: JobDurationEnum;

   
  @ApiProperty({ description: "Salary", example: "20", required: true })
  @IsNotEmpty({ message: "Salary must not be empty" })
  @IsString()
  salary: string;
 

  @ApiProperty({example : "Bangalore"})
  @IsNotEmpty({message: "City cannot be empty"})
  city: string;
 
  @ApiProperty({example: "India"})
  @IsNotEmpty({message: "Country cannot be empty"})
  country: string;

  @ApiProperty({example:"srijanmukhopadhyay9@gmail.com"})
  @IsEmail()
  @IsNotEmpty({message:"Email cannot be empty"})
  email:string

  @ApiProperty({example:"sreejan@2306"})
  username: string;

  @ApiProperty({example :'Hey I am Flutter developer' , required: true})
  @IsNotEmpty()
  @IsString()
  about: string ; 

  @ApiProperty({required: false})
  profilePicture: string ; 

 
}
