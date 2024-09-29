import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CandidateFeedResponseDTO } from './candidate_feed_response.dto';


export class CandidateFeedItemResponseDTO {
  @ApiProperty({ type: [CandidateFeedResponseDTO] })
  @Type(() => CandidateFeedResponseDTO)
  @Expose()
  items: CandidateFeedResponseDTO[];

  @ApiProperty({ required: false })
  @Expose()
  nextToken?: string | null;
}


