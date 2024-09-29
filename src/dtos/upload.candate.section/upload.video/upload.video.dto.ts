import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UploadVideoDTO{


    @ApiProperty({description:"candidateVideoId" , example : "bf7682a1-78f2-493a-9df2-7e4fd1eeec50" , required: false})
    candidateVideoFeedId? : string ; 

    @ApiProperty({description:"Candiudate Id required for joining" , example : "bf7682a1-78f2-493a-9df2-7e4fd1eeec51" , required: true})
    @IsNotEmpty({message: "Candidate Id cannot be empty"})
    @IsString()
    candidateId : string ; 



    @ApiProperty({description:"Candiudate Id required for joining" , example : "bf7682a1-78f2-493a-9df2-7e4fd1eeec51" , required: true})
    @IsNotEmpty({message: "Candidate Id cannot be empty"})
    @IsString()
    description : string ; 



    @ApiProperty({description:"Candiudate Id required for joining" , example : "bf7682a1-78f2-493a-9df2-7e4fd1eeec51" , required: true})
    @IsNotEmpty({message: "Candidate Id cannot be empty"})
    @IsString()
    thumbnailUrl : string ; 


    @ApiProperty({description: "thumnauilWidth" , example :"250" , required : false})
    thumbnailWidth? : string ; 


    @ApiProperty({description: "thumbNailHeight" , example: "350" , required : false})
    thumbnailHeight?: string ; 



    @ApiProperty({description: "playbackId" , example: "somePlayBackUniqueId" , required : false})
    playbackId?: string ; 


   @ApiProperty({description: "assetId" , example : "someUniqueAssetId" , required : false})
   assetId?: string ; 


   @ApiProperty({description: "uploadId" , example : "someUniqueUploadId", required : false})
   uploadId: string ; 


   @ApiProperty({description:"Tags" , example:["Flutter" , "Android" , "IOS"], required : false})
   tag?:string[] ; 


   @ApiProperty({description: "Catagory" , example:["App Development" , "IT Industtry"] , required: false})
   category? : string[] ; 

    
}