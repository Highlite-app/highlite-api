
import { ApiBody, ApiProperty, ApiTags } from "@nestjs/swagger";
import { CandidateFollowingDTO } from "src/dtos/home_feed/candidate/candidate.following.dto";
import { Body, Post, Controller, HttpStatus } from "@nestjs/common";
import { v4 as uuid4 } from 'uuid';
import { IDRequestDTO } from "src/dtos/home_feed/candidate/ID.request.dto";
import { CandidateFollowingService } from "../home-feed.following/candidate.following.servce";
@Controller('Like')
@ApiTags("Candidate-Like")
export class CandidateLikeController {


   constructor(private readonly candidateFollowingService: CandidateFollowingService) { }

   @Post("createCandidateLike")
   async createCandidateFollowing(@Body() candidateFollowingDTO: CandidateFollowingDTO) {
      const createCandidateFolowing = await this.candidateFollowingService.createCandidateFollowing(candidateFollowingDTO);

      if (createCandidateFolowing.id == "" || createCandidateFolowing.id == null) {
         createCandidateFolowing.id = uuid4();
      }
      return {
         id: createCandidateFolowing.id
      };
   }

   @Post("deleteCandidateLike")
   async deleteCandidateFollowing(@Body() idrequestDto: IDRequestDTO) {
      const deleteCandidateFollowing = await this.candidateFollowingService.deleteCandidateFollowing(idrequestDto.id);

      
      return {
         id: deleteCandidateFollowing.id , 
         message: "You have sucessfully Unfollowed"
      };
   }

   @Post("deleteMultipleCandidateLike")
   async deleteMultipleCandidateFollowing(@Body() idrequestDto: IDRequestDTO[]) {
      const deleteCandidateFollowing = await this.candidateFollowingService.deleteMultipleCandidateFollowing("id");

      
      return {
         id: deleteCandidateFollowing.id
      };
   }

   @Post("createMultipleCandidateLike")
   @ApiBody({description:"List of follows to create" , type:[CandidateFollowingDTO]})
   async createMultipleandidateFollowing(@Body() candidateFollowingDTO: CandidateFollowingDTO[]) {
   
      return {
         status: HttpStatus.OK,
         message: 'Follows successfully created',
         data: candidateFollowingDTO // Optionally return the created follows or a confirmation message
     };
   }



   
}
