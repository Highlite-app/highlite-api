import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { CompanyOnBoardingDTO } from '../company/company.details.dto';
import { CompanyJobPostDTO } from '../company/company.job.post.dto';
import { CandidateOnBoardingDto } from '../candidate/candidate.onboarding.dto';
import { CandidateFeedResponseDTO } from '../home_feed/candidate/candidate_feed_response.dto';
import { UploadVideoDTO } from '../upload.candate.section/upload.video/upload.video.dto';
import { CompanyJobPostVideoFeedDTO } from '../company/company.job.post.video.feed.dto';
import { CompanyHomeFeedDetailsDTO } from '../home_feed/company/company.home.feed.details.dto';
import { UploadAboutDTO } from '../upload.candate.section/upload.resume/upload.about.dto';
import { CandidateEducationDTO } from '../upload.candate.section/upload.resume/upload.education.dto';
import { CandidateEmploymentDTO } from '../upload.candate.section/upload.resume/upload.employment.dto';
import { CandidateProjectDTO } from '../upload.candate.section/upload.project/upload.project.dto';
import { CandidateHomeFeedDetailsDTO } from '../home_feed/candidate/candidate.home.feed.details.dto';
import { UploadCandidateEducation } from 'src/schemas/upload.candidate.section/upload.education.schema';
import { UploadCandidateEmployment } from 'src/schemas/upload.candidate.section/upload.employment.schema';
import { UploadCandidateProject } from 'src/schemas/upload.candidate.section/upload.proejct.schema';
import { UploadCandidateAbout } from 'src/schemas/upload.candidate.section/upload.about.schema';

export class BookmarkInfo {

  @ApiProperty({ description: "This is the Bookmark Info ID", example: 'binfo123', required: true })
  @IsNotEmpty({ message: "Bookmark Info ID cannot be empty" })
  @IsString()
  bookmarkInfoId: string;

  @ApiProperty({ description: "Type of the bookmark info", example: 'companyOnboarding', required: true })
  @IsNotEmpty({ message: "Type cannot be empty" })
  @IsString()
  type: string;

  @ApiProperty({ description: "ID of the bookmark collection", example: 'bcol123', required: true })
  @IsNotEmpty({ message: "Bookmark Collection ID cannot be empty" })
  @IsString()
  bookmarkCollectionId: string;

  @ApiProperty({ description: "Reference ID for the bookmark", example: 'ref123', required: true })
  @IsNotEmpty({ message: "Reference ID cannot be empty" })
  @IsString()
  referenceId: string;

  //Candidate part

  @ApiPropertyOptional({ description: "Candidate Onboarding associated with the bookmark" })
  @IsOptional()
  @ValidateNested()
  @Type(() => CandidateOnBoardingDto)
  candidateOnBoarding?: CandidateOnBoardingDto | null;
  

  @ApiPropertyOptional({ description: "Candidate Video Feed associated with the bookmark" })
  @IsOptional()
  @ValidateNested()
  @Type(() => UploadVideoDTO)
  candidateVideoFeed?: UploadVideoDTO | null;

  @ApiPropertyOptional({ description: "About Candidate associated with the bookmark" })
  @IsOptional()
  @ValidateNested()
  @Type(() => UploadCandidateAbout)
  aboutCandidate?: UploadCandidateAbout| null;

  @ApiPropertyOptional({ description: "List of Candidate Education associated with the bookmark" })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UploadCandidateEducation)
  candidateEducation?: UploadCandidateEducation[]| [];

  @ApiPropertyOptional({ description: "List of Candidate Employment associated with the bookmark" })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UploadCandidateEmployment)
  candidateEmployment?: UploadCandidateEmployment[] | [];

  @ApiPropertyOptional({ description: "List of Candidate Projects associated with the bookmark" })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UploadCandidateProject)
  candidateProject?: UploadCandidateProject[] | [];

  @ApiPropertyOptional({ description: "Candidate Home Feed Details associated with the bookmark" })
  @IsOptional()
  @ValidateNested()
  @Type(() => CandidateHomeFeedDetailsDTO)
  candidateHomeFeedDetails?: CandidateHomeFeedDetailsDTO | null;


  // Company part

  @ApiPropertyOptional({ description: "Company Onboarding associated with the bookmark" })
  @IsOptional()
  @ValidateNested()
  @Type(() => CompanyOnBoardingDTO)
  companyOnboarding?: CompanyOnBoardingDTO| null;

  @ApiPropertyOptional({ description: "Job Posting associated with the bookmark" })
  @IsOptional()
  @ValidateNested()
  @Type(() => CompanyJobPostDTO)
  jobPosting?: CompanyJobPostDTO| null;


  @ApiPropertyOptional({ description: "Company Home Feed Details associated with the bookmark" })
  @IsOptional()
  @ValidateNested()
  @Type(() => CompanyHomeFeedDetailsDTO)
  companyHomeFeedDetails?: CompanyHomeFeedDetailsDTO| null;


  @ApiPropertyOptional({ description: "Company Job Post Video Feed associated with the bookmark" })
  @IsOptional()
  @ValidateNested()
  @Type(() => CompanyJobPostVideoFeedDTO)
  companyJobPostVideoFeed?: CompanyJobPostVideoFeedDTO| null;
}
