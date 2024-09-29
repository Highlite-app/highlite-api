import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

import { CompanyJobPostDTO } from 'src/dtos/company/company.job.post.dto';
import { CompanyOnBoardingDTO } from 'src/dtos/company/company.details.dto';
import { CompanyHomeFeedDetailsDTO } from './company.home.feed.details.dto';

export class CompanyJobFeedResponseDTO {
  
  @ApiProperty({ description: "This is the Job Video Feed ID", example: '98827e2-100b-428d-88f8-9fc261d07c3a', required: true })
  @IsNotEmpty({ message: "Job Video Feed ID cannot be empty" })
  @IsString()
  jobVideoFeedId: string;

  @ApiProperty({ description: "This is the Playback ID", example: "playback_12345", required: true })
  @IsNotEmpty({ message: "Playback ID cannot be empty" })
  @IsString()
  playbackId: string;

  @ApiProperty({ description: "This is the Company ID", example: "company_12345", required: true })
  @IsNotEmpty({ message: "Company ID cannot be empty" })
  @IsString()
  companyId: string;

  @ApiProperty({ description: "This is the Upload ID", example: "upload_12345", required: true })
  @IsNotEmpty({ message: "Upload ID cannot be empty" })
  @IsString()
  uploadId: string;

  @ApiProperty({ description: "This is the Asset ID", example: "asset_12345", required: true })
  @IsNotEmpty({ message: "Asset ID cannot be empty" })
  @IsString()
  assetId: string;

  @ApiProperty({ description: "This is the Thumbnail Width", example: "640", required: true })
  @IsNotEmpty({ message: "Thumbnail Width cannot be empty" })
  @IsString()
  thumbnailWidth: string;

  @ApiProperty({ description: "This is the Thumbnail Height", example: "360", required: true })
  @IsNotEmpty({ message: "Thumbnail Height cannot be empty" })
  @IsString()
  thumbnailHeight: string;

  @ApiProperty({ description: "This is the Job Status", example: "active", required: true })
  @IsNotEmpty({ message: "Job Status cannot be empty" })
  @IsString()
  jobStatus: string;

  @ApiProperty({ type: CompanyOnBoardingDTO })
  @Type(() => CompanyOnBoardingDTO)
  @Expose()
  companyOnboarding: CompanyOnBoardingDTO;

  @ApiProperty({ type: CompanyHomeFeedDetailsDTO })
  @Type(() => CompanyHomeFeedDetailsDTO)
  @Expose()
  companyHomeFeedDetails: CompanyHomeFeedDetailsDTO;

  @ApiProperty({ type: CompanyJobPostDTO })
  @Type(() => CompanyJobPostDTO)
  @Expose()
  companyJobPost: CompanyJobPostDTO;
}
