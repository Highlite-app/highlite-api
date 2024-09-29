import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsArray, IsBoolean, IsEnum } from "class-validator";
import { EmploymentStatus } from "src/enums/employment.status.enum";


export class UploadAboutDTO {


  @ApiProperty({ description: 'Primary Key', example: 'AboutId'  , required : false})
  aboutId?: string;

  @ApiProperty({ description: 'Candidate ID , when a candidate is onBoarding for the first time', example: 'c96acdb2-a76e-4b0f-8dfb-cdfac2f3dde8' })
  @IsNotEmpty()
  @IsString()
  candidateId: string

  @ApiProperty({ description: 'About Candidate', example: 'I am a software developer' })
  @IsNotEmpty()
  @IsString()
  aboutCandidate: string;



  @ApiProperty({ description: 'Languages', example: ['English', 'Bengali', 'Hindi'] })
  @IsNotEmpty({ message: 'Languages cannot be empty' })
  @IsArray()
  @IsString({ each: true })
  languages: string[];






}