import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEnum, IsNotEmpty, IsString, ValidateIf } from "class-validator";
import { PorjectStatus } from "src/enums/project.status.enum";

export class CandidateProjectDTO{


    @ApiProperty({description: "Primary Key" , example:"c96acdb2-a76e-4b0f-8dfb-cdfac2f3dde8" , required : false})
    projectId?: string ; 

    @ApiProperty({description: "Resume ID is must to ensure data belong to which candiate" , example:"c96acdb2-a76e-4b0f-8dfb-cdfac2f3dde8"})
    @IsString()
    @IsNotEmpty()
    candidateId: string ; 

    @ApiProperty({description: "Project title" , example:"E-commerce Application"})
    @IsString()
    @IsNotEmpty()
    projectTitle : string ; 

    @ApiProperty({description: "Project Client" , example:'0260 LABS LLC'})
    @IsNotEmpty({message:"Project Tag with employment and education cannot be emplty"})
    @IsString({each: true})
    projectClient:string ; 



    @ApiProperty({description:"Project Status" , enum : PorjectStatus , example: PorjectStatus.IN_PROGRESS})
    @IsEnum(PorjectStatus)
    @IsNotEmpty()
    projectStatus : PorjectStatus ; 

    @ApiProperty({ description: "Work From", example: "2022-01-01" })
    @IsString()
    @IsNotEmpty()
    projectStart: string;

    @ApiProperty({description: "Work Till" , example:'2023-01-01' , required : false})
    @ValidateIf(o=> o.projectStatus == PorjectStatus.FINISHED)
    @IsString()
    @IsNotEmpty()
    projectFinish?: string ; 

    @ApiProperty({description: "Project Details" , example:"Here the main Problem Statement is Quick and reiable medicine delivery which is solved through this app "})
    @IsString()
    @IsNotEmpty()
    projectDetails: string  ; 


    @ApiProperty({description: "Skills used in the project" , example:['Flutter ', 'Aws', 'NestJS'], required: false})
    @IsArray()
    @IsString({each : true})
    projectSkills? : string[]  ; 

    @ApiProperty({description:"Tools used in the project" , example:['Android Studio ', 'Visual Studio', 'Figma'], required: false})
    @IsArray()
    @IsString({each : true})
    projectTools? : string[]  ; 
    

    
}