
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsArray, IsBoolean, IsEnum } from "class-validator";
import { EmploymentStatus } from "src/enums/employment.status.enum";
export class CandidateEmploymentDTO{

  @ApiProperty({ description: 'Primary Key', example: 'EmploymentId' , required: false })
  employmentId? : string;

  @ApiProperty({ description: 'Candidate ID , when a candidate is onBoarding for the first time Foreign Key', example: 'c96acdb2-a76e-4b0f-8dfb-cdfac2f3dde8' })
  @IsNotEmpty()
  @IsString()
  candidateId: string;

  @ApiProperty({ description: 'Employment Status', enum: EmploymentStatus ,  example: EmploymentStatus.Employed })
  @IsNotEmpty()
  @IsEnum(EmploymentStatus)
  employmentStatus: string;


  @ApiProperty({ description: 'employmentType', example: 'Full Time/Part Time' })
  @IsNotEmpty()
  @IsString()
  employmentType: string;


  @ApiProperty({ description: 'Title', example: 'Company Title' })
  @IsNotEmpty()
  @IsString()
  employmentTitle: string;

 

  @ApiProperty({ description: 'Current Company Name', example: 'ABC Corp' })
  @IsNotEmpty()
  @IsString()
  companyName: string;



  @ApiProperty({ description: 'Work Till', example: 'Present' })
  @IsNotEmpty()
  @IsString()
  startDate: string;



  @ApiProperty({ description: 'Industry', example: 'IT' })
  @IsNotEmpty()
  @IsString()
  endDate: string;



}