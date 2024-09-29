import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CompanyJobFeedResponseDTO } from './company_job_feed_response_dto';


export class CompanyJobFeedItemsResponseDTO {
  @ApiProperty({ type: [CompanyJobFeedResponseDTO] })
  @Type(() => CompanyJobFeedResponseDTO)
  @Expose()
  items: CompanyJobFeedResponseDTO[];

  @ApiProperty({ required: false })
  @Expose()
  nextToken?: string | null;
}
