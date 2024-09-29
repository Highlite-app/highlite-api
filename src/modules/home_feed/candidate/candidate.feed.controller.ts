
import { Controller, Get, Query } from "@nestjs/common";
import { CompanyJobFeedItemsResponseDTO } from "src/dtos/home_feed/company/company_job_item_response_dto";
import { ApiProperty, ApiQuery, ApiTags } from "@nestjs/swagger";
import {v4 as uuid4} from  'uuid';
import { CandidateFeedItemResponseDTO } from "src/dtos/home_feed/candidate/candidate.feed.item.response.dto";
import { CandidateHomeFeedService } from "./candidate.home.feed.service";
import { CandidateFeedService } from "./candidate.feed.service";


@Controller('HomeFeed')
@ApiTags('Home-Feed')
export class CandidateFeedController {


    constructor(private readonly candidateFeedService : CandidateFeedService){}

     @Get('fetchCandidateHomeFeed')
     @ApiQuery({ name: 'nextToken', required: false }) 
      async getCandidateFeed(@Query('nextToken') nextToken?: string):Promise<CandidateFeedItemResponseDTO>{
         
       const nextTokenID = uuid4() ;   
       const companyFeedResponse = this.candidateFeedService.getCandidateFeed(nextTokenID) ; 
 
       return  companyFeedResponse ; 
      }

}