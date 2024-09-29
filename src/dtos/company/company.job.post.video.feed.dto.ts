import { ApiProperty } from '@nestjs/swagger';

export class CompanyJobPostVideoFeedDTO {
  @ApiProperty()
  jobVideoFeedId: string;

  @ApiProperty()
  playbackId: string;


  @ApiProperty()
  thumbnailWidth: string;
  
  @ApiProperty()
  thumbnailHeight: string;

  @ApiProperty()
  assetId: string;

  @ApiProperty()
  uploadId: string;

  @ApiProperty()
  jobStatus: string;

  @ApiProperty()
  companyId: string;

  constructor(data: Partial<CompanyJobPostVideoFeedDTO>) {
    Object.assign(this, data);
  }
}
