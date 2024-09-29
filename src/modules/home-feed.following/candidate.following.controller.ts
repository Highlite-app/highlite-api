import { ApiBody, ApiProperty, ApiTags } from "@nestjs/swagger";
import { CandidateFollowingDTO } from "src/dtos/home_feed/candidate/candidate.following.dto";
import { Body, Post, Controller, HttpStatus } from "@nestjs/common";
import { CandidateFollowingService } from "./candidate.following.servce";
import { v4 as uuid4 } from 'uuid';
import { IDRequestDTO } from "src/dtos/home_feed/candidate/ID.request.dto";

@Controller('Following')
@ApiTags("Candidate-Following")
export class CandidateFollowingController {


   constructor(private readonly candidateFollowingService: CandidateFollowingService) { }

   @Post("createCandidateFollowing")
   async createCandidateFollowing(@Body() candidateFollowingDTO: CandidateFollowingDTO) {
      const createCandidateFolowing = await this.candidateFollowingService.createCandidateFollowing(candidateFollowingDTO);

      if (createCandidateFolowing.id == "" || createCandidateFolowing.id == null) {
         createCandidateFolowing.id = uuid4();
      }
      return {
         id: createCandidateFolowing.id
      };
   }

   @Post("deleteCandidateFollowing")
   async deleteCandidateFollowing(@Body() idrequestDto: IDRequestDTO) {
      const deleteCandidateFollowing = await this.candidateFollowingService.deleteCandidateFollowing(idrequestDto.id);

      
      return {
         id: deleteCandidateFollowing.id , 
         message: "You have sucessfully Unfollowed"
      };
   }

   @Post("deleteMultipleCandidateFollowing")
   async deleteMultipleCandidateFollowing(@Body() idrequestDto: IDRequestDTO[]) {
      const deleteCandidateFollowing = await this.candidateFollowingService.deleteMultipleCandidateFollowing("id");

      
      return {
         id: deleteCandidateFollowing.id
      };
   }

   @Post("createMultipleCandidateFollowing")
   @ApiBody({description:"List of follows to create" , type:[CandidateFollowingDTO]})
   async createMultipleandidateFollowing(@Body() candidateFollowingDTO: CandidateFollowingDTO[]) {
   
      return {
         status: HttpStatus.OK,
         message: 'Follows successfully created',
         data: candidateFollowingDTO // Optionally return the created follows or a confirmation message
     };
   }



   
}

