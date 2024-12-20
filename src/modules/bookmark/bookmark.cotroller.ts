import { Body, Controller, Post , Get , Query, Param, HttpException, HttpStatus, Delete } from "@nestjs/common";
import { ApiTags , ApiQuery  } from "@nestjs/swagger";
import { BookmarkCollectionDTO } from "src/dtos/bookmark/bookmark.collection.dto";
import {v4 as uuid4} from 'uuid' ; 
import { BookmarkService } from "./bookmark.service";
import { BookmarkCollectionItemResponse } from "src/dtos/bookmark/bookmark.collection.item.resonse";
import { BookmarkInfoDTO } from "src/dtos/bookmark/bookmark.info.dto";

@Controller()
@ApiTags('Bookmark')

export class BookmarkController {

    constructor(private readonly bookmarkService: BookmarkService){}

    async getNextToken(nextToken: string | null | undefined) :Promise<string>{
        if(nextToken)  {
           return nextToken ; 
        }else {
           const nextTokenID = uuid4() ;   
           return  nextTokenID ; 
        }
     }




    @Post('bookmarkDetails')
    async bookmarkDetails(@Body() bookmarkCollectionDTO :BookmarkCollectionDTO){

        const bookmarkId = uuid4() ; 

        const bookmarkDetails  = await this.bookmarkService.bookmark( bookmarkCollectionDTO , bookmarkId) ; 

        return {
            status: 200 , 
            message: "Bookmark details stored successfuylly"
        }
    }


   @Post('addBookmarkInfo')
   async addBookmarkInfo(@Body() bookmarkInfoDto : BookmarkInfoDTO): Promise<any>{

    
        
    try{

        const addBookmarkInfo = await this.bookmarkService.addBookmarkInfo(bookmarkInfoDto);
        return {
            success: true , 
            message : "Bookmark info added successfully" , 
            data: addBookmarkInfo 
        } ; 
    } catch(error){
         throw new HttpException(

            {
                success : false , 
                message : error.message 

            } , 
            HttpStatus.BAD_REQUEST
         );
    }
       
   }

   @Delete('deleteCollection/:bookmarkId')
   async deleteCollection(@Param('bookmarkId') bookmarkId: string){

    

    const bookmarkCollection = await this.bookmarkService.deleteBookmarkCollection(bookmarkId);

    return {

        status: HttpStatus.OK , 
        message : `${bookmarkCollection.title} is sucessfully deleted` ,

    }

   }

    @Get('fetchBookmarkDetails/:userId')
    @ApiQuery({ name: 'nextToken', required: false }) 
     async getBookmarkDetails( @Param('userId') userId:string ,   @Query('nextToken') nextToken?: string):Promise<BookmarkCollectionItemResponse>{
        
     const nextTokenId = await this.getNextToken(nextToken) ; 
      const companyFeedResponse = this.bookmarkService.getBookmarkDetails(userId , nextTokenId) ; 

      return  companyFeedResponse ; 
     }
}