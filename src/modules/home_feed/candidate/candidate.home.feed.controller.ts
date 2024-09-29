import { Controller, Get, Query } from "@nestjs/common";
import { CompanyJobFeedItemsResponseDTO } from "src/dtos/home_feed/company/company_job_item_response_dto";
import { ApiProperty, ApiQuery, ApiTags } from "@nestjs/swagger";
import {v4 as uuid4} from  'uuid';
import { CandidateHomeFeedService } from "./candidate.home.feed.service";

@Controller('HomeFeed')
@ApiTags('Home-Feed')
export class  CandidateHomeFeedController{

    constructor(private readonly candidateHomeFeedService: CandidateHomeFeedService ){}


    async getNextToken(nextToken: string | null | undefined) :Promise<string>{
      if(nextToken)  {
         return nextToken ; 
      }else {
         const nextTokenID = uuid4() ;   
         return  nextTokenID ; 
      }
   }

    @Get('fetchCompanyHomeFeed')
    @ApiQuery({ name: 'nextToken', required: false }) 
     async getHomeFeed(@Query('nextToken') nextToken?: string):Promise<CompanyJobFeedItemsResponseDTO>{
        
      
     const  nextTokenId  =  await this.getNextToken(nextToken) ; 

  
    
      const companyJobPostFeedResponse = this.candidateHomeFeedService.getHomeFeed(nextTokenId) ; 

      return  companyJobPostFeedResponse ; 
     }

     @Get('fetchAllByCompanyID')
     @ApiQuery({name: 'nextToken' , required: false })
     async fetchAllByCompany( @Query('companyId') companyId:string , @Query('nextToken') nextToken?:string ){

       
        const companyJobFeedResponseByCompanyID  = this.candidateHomeFeedService.getHomeFeedByCompanyID(companyId , nextToken) ; 
        return companyJobFeedResponseByCompanyID ; 
     }

     @Get('fetchAllPaginatedByCompanyId')
     @ApiQuery({ name: 'nextToken', required: false }) 
     async fetchAllPaginatedByCompany( @Query('companyId') companyId:string , @Query('nextToken') nextToken?:string){

        const companyJobFeedResponsePaginatedByCompanyID  = this.candidateHomeFeedService.getPaginatedByCompanyID( companyId , nextToken) ; 
        return companyJobFeedResponsePaginatedByCompanyID ; 
     }


     

}