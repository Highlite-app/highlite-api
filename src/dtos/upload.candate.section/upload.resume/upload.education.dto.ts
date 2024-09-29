
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsArray, IsBoolean, IsEnum } from "class-validator";



export class CandidateEducationDTO {


    @ApiProperty({ description: 'Primary Key', example: 'EducationId' , required: false })
    educationId?: string;

    @ApiProperty({ description: 'Candidate ID , when a candidate is onBoarding for the first time Foreign Key', example: 'c96acdb2-a76e-4b0f-8dfb-cdfac2f3dde8' })
    @IsNotEmpty()
    @IsString()
    candidateId: string;


    @ApiProperty({ description: 'School', example: 'University of Texus' })
    @IsNotEmpty()
    @IsString()
    school: string;

    @ApiProperty({ description: 'Degree', example: 'Bachelor of Technology' })
    @IsNotEmpty()
    @IsString()
    degree: string;


    @ApiProperty({ description: 'Specialization', example: 'Computer Science' })
    @IsNotEmpty()
    @IsString()
    specialization: string;


    @ApiProperty({ description: 'Start Date', example: '2026' })
    @IsNotEmpty()
    @IsString()
    startDate: string;

    @ApiProperty({ description: 'End Date', example: '2026' })
    @IsNotEmpty()
    @IsString()
    endDate: string;
}