import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UploadVideoDTO } from "src/dtos/upload.candate.section/upload.video/upload.video.dto";
import { UploadCandidateVideo, UploadCandidateVideoSchema } from "src/schemas/upload.candidate.section/upload.video.schema";


@Injectable()
export class UploadVideService{



    constructor(@InjectModel(UploadCandidateVideo.name) private readonly uploadCandidateVideoModel : Model<any>){}



    async uploadCandidateVideo( uploadVideoDTO : UploadVideoDTO , uploadVideoId: string): Promise<UploadCandidateVideo | any>{

        const uploadVideo  = await new this.uploadCandidateVideoModel(uploadVideoDTO ) ;
        uploadVideo.candidateVideoFeedId = uploadVideoId ; 

        const saveUploadVidep = uploadVideo.save() ; 

        return saveUploadVidep ; 

    }

    async getAllCandidateVideByCandidateId(candidateId : string) : Promise<UploadCandidateVideo[]>{

        const  getUploadedVideo =  this.uploadCandidateVideoModel.find({candidateId}); 

        return getUploadedVideo ; 
    }


    async getAllCandidateVideo():  Promise<UploadCandidateVideo[]>{

        const uploadVideo = this.uploadCandidateVideoModel.find().exec() ; 

        return uploadVideo ; 
    }
}