import { Body, Controller, HttpException, HttpStatus, Post, Res  } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LikeService } from "./like.service";
import { CreateLikeDTO } from "src/dtos/like/create.lile.dto";

@Controller("Like")
@ApiTags("Like-stream")
export class LikeController {

    constructor(private readonly likeService : LikeService){}


    @Post("like-service")
     async likePost(@Body() createLikeDto : CreateLikeDTO){

        try {
            await this.likeService.putRecordToStream(createLikeDto) ;
            return {message : 'Like Event Sent Successfully ' };
        } catch (error) {
            console.error('Failed to send like event',error) ; 
            throw new HttpException({
                status: HttpStatus.SERVICE_UNAVAILABLE , 
                message:"Failed to process like event due to external service unavailability'" , 
                error :"Unable to process like at this time" , 

        }, HttpStatus.SERVICE_UNAVAILABLE);



    }
}
}

