import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { JobDurationEnum } from 'src/enums/job.duration.enum';
import { JobStatusEnum } from 'src/enums/job.status.enum';
import { WorkTypeEnum } from 'src/enums/work.type.enum';

export class CompanyJobPostDTO {

  @ApiProperty({ description: "This is primary Key", example: '98827e2-100b-428d-88f8-9fc261d07c3a', required: false })
  jobPostId?: string;

  @ApiProperty({ description: "This is CompanyId", example: "98827e2-100b-428d-88f8-9fc261d07c3a", required: true })
  @IsNotEmpty({ message: "Company ID Cannot Be Empty. Create a Company Profile To Get CompanyID" })
  @IsString()
  companyId: string;

  @ApiProperty({ description: "This is VideoFeed Id, required for Data Joining", example: "98827e2-100b-428d-88f8-9fc261d07c3a", required: true })
  @IsNotEmpty({ message: "Video Feed Id cannot be empty, since must be attached with the JobPost" })
  @IsString()
  jobVideoFeedId: string;

  @ApiProperty({ description: "Job Post Description", example: "We are actively hiring for Application Developer", required: true })
  @IsNotEmpty({ message: "Description cannot be empty, since its required to understand the Job Post" })
  @IsString()
  jobDescription: string;

  @ApiProperty({ description: "Location", example: "Mountain View, USA", required: true })
  @IsNotEmpty({ message: "Location cannot be empty" })
  @IsString({ message: "Data Type must be a string" })
  location: string;

  @ApiProperty({ description: "Position", example: "UI/UX", required: true })
  @IsNotEmpty({ message: "Position is required to match with appropriate skilled candidate" })
  @IsString({ message: "Data Type must be a string" })
  position: string;

  @ApiProperty({ required: true, example: ["Flutter", "Android", "NestJS"] })
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  skills: string[];

  @ApiProperty({ required: true, example: ["Figma", "ChatGPT", "Airtable"] })
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  tools: string[];

  @ApiProperty({ description: "WorkType Enum", example: WorkTypeEnum.remote, required: true })
  @IsEnum(WorkTypeEnum, { message: "Work Type must be remote, inOffice, or both" })
  @IsNotEmpty({ message: "WorkType cannot be empty" })
  workType: WorkTypeEnum;

  @ApiProperty({ description: "JobDuration Enum", example: JobDurationEnum.fullTime, required: true })
  @IsEnum(JobDurationEnum, { message: "Job Duration must be fullTime, partTime, or both" })
  @IsNotEmpty({ message: "JobDuration cannot be empty" })
  jobDuration: JobDurationEnum;

  @ApiProperty({ description: "Salary", example: "20", required: true })
  @IsNotEmpty({ message: "Salary must be empty" })
  @IsString()
  salary: string;

  @ApiProperty({ description: "JobStatus enum", example: JobStatusEnum.active, required: true })
  @IsEnum(JobStatusEnum, { message: "JobStatus can be active or inactive" })
  @IsNotEmpty()
  status: JobStatusEnum;
}
