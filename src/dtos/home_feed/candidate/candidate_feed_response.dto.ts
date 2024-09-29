import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CandidateDetails } from 'src/modules/candidate/model/candidate.details';
import { UploadAboutDTO } from 'src/dtos/upload.candate.section/upload.resume/upload.about.dto';
import { UploadCandidateEmployment } from 'src/schemas/upload.candidate.section/upload.employment.schema';
import { UploadCandidateEducation } from 'src/schemas/upload.candidate.section/upload.education.schema';
import { UploadCandidateProject } from 'src/schemas/upload.candidate.section/upload.proejct.schema';
import { CandidateOnBoardingDto } from 'src/dtos/candidate/candidate.onboarding.dto';

export class CandidateFeedResponseDTO {
  @ApiProperty({ description: "This is the Candidate Video Feed ID", example: '98827e2-100b-428d-88f8-9fc261d07c3a', required: true })
  @IsNotEmpty({ message: "Candidate Video Feed ID cannot be empty" })
  @IsString()
  candidateVideoFeedId: string;

  @ApiProperty({ description: "This is the Candidate ID", example: '98827e2-100b-428d-88f8-9fc261d07c3a', required: true })
  @IsNotEmpty({ message: "Candidate ID cannot be empty" })
  @IsString()
  candidateId: string;

  @ApiProperty({ description: "This is the description", example: 'Candidate description', required: true })
  @IsNotEmpty({ message: "Description cannot be empty" })
  @IsString()
  description: string;

  @ApiProperty({ description: "This is the thumbnail URL", example: 'http://example.com/thumbnail.jpg', required: true })
  @IsNotEmpty({ message: "Thumbnail URL cannot be empty" })
  @IsString()
  thumbnailUrl: string;

  @ApiProperty({ description: "This is the thumbnail width", example: '1920', required: true })
  @IsNotEmpty({ message: "Thumbnail width cannot be empty" })
  @IsString()
  thumbnailWidth: string;

  @ApiProperty({ description: "This is the thumbnail height", example: '1080', required: true })
  @IsNotEmpty({ message: "Thumbnail height cannot be empty" })
  @IsString()
  thumbnailHeight: string;

  @ApiProperty({ description: "This is the playback ID", example: 'playbackId123', required: true })
  @IsNotEmpty({ message: "Playback ID cannot be empty" })
  @IsString()
  playbackId: string;

  @ApiProperty({ description: "This is the asset ID", example: 'assetId123', required: true })
  @IsNotEmpty({ message: "Asset ID cannot be empty" })
  @IsString()
  assetId: string;

  @ApiProperty({ description: "This is the upload ID", example: 'uploadId123', required: true })
  @IsNotEmpty({ message: "Upload ID cannot be empty" })
  @IsString()
  uploadId: string;

  @ApiProperty({ description: "Tags associated with the candidate", example: ['tag1', 'tag2'], required: true })
  @IsArray()
  @IsString({ each: true })
  tag: string[];

  @ApiProperty({ description: "Categories associated with the candidate", example: ['category1', 'category2'], required: true })
  @IsArray()
  @IsString({ each: true })
  category: string[];

  @ApiProperty({ description: "Candidate onboarding details", type: CandidateDetails })
  @Type(() => CandidateOnBoardingDto)
  @IsNotEmpty()
  candidateOnBoarding: CandidateOnBoardingDto;

  @ApiProperty({ description: "About the candidate", type: UploadAboutDTO })
  @Type(() => UploadAboutDTO)
  @IsNotEmpty()
  aboutCandidate: UploadAboutDTO;

  @ApiProperty({ description: "Candidate's employment history", type: [UploadCandidateEmployment], required: false })
  @Type(() => UploadCandidateEmployment)
  candidateEmployment?: UploadCandidateEmployment[];

  @ApiProperty({ description: "Candidate's education details", type: [UploadCandidateEducation], required: false })
  @Type(() => UploadCandidateEducation)
  candidateEducation?: UploadCandidateEducation[];

  @ApiProperty({ description: "Candidate's project details", type: [UploadCandidateProject], required: false })
  @Type(() => UploadCandidateProject)
  candidateProject?: UploadCandidateProject[];
}
