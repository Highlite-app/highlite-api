import { ApiTags  , ApiOperation , ApiResponse} from "@nestjs/swagger";
import { UploadVideService } from "./upload.video.service";
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post , ConflictException } from "@nestjs/common";
import { UploadVideoDTO } from "src/dtos/upload.candate.section/upload.video/upload.video.dto";
import { v4 as uuid4} from 'uuid' ; 


@Controller()
@ApiTags("Upload-Candidate-Video")
export class UploadVideoController{

  constructor(private readonly uploadVideService: UploadVideService){}



  @Post('uploadVideo')
  @ApiOperation({ summary: 'Upload Candidate About' })
  @ApiResponse({ status: 200, description: 'Candidate Resume Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse({ status: 404, description: 'Bad Request' })
  @ApiResponse({ status: 409, description: 'Resume with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async uploadCandidateVideo(@Body()  uploadVideoDTO : UploadVideoDTO){

    try {
        const uploadVideoID = uuid4() ; 
        const uploadVideo  = this.uploadVideService.uploadCandidateVideo(uploadVideoDTO  , uploadVideoID)
    
    
        return {
            status: 200 , 
            candidateVideoId :uploadVideoID 
        }
    
    } catch (error) {
        if(error instanceof HttpException) throw new HttpException('Failed to upload video ' , HttpStatus.INTERNAL_SERVER_ERROR)
        
    }
  }


  @Get('getCandidateVideoByCandidateId/:candidateId')
  async  getCandudateVideoByCandidateId( @Param('candidateId') candidateId: string)  {

    try{
      const getCandidateVideoByCandidateId = this.uploadVideService.getAllCandidateVideByCandidateId(candidateId) ; 
      return getCandidateVideoByCandidateId ; 
    }
    catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to get CandidateVideoFeed from CandidateId.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}