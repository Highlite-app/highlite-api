import { Module } from "@nestjs/common";
import { UploadResumeController } from "./upload.resume/upload.resume.controller";
import { UploadCandidateService } from "./upload.resume/upload.candidate.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UploadCandidateProject, UploadCandidateProjectSchema } from "src/schemas/upload.candidate.section/upload.proejct.schema";
import { UploadCandidateAbout, UploadCandidateAboutschema } from "src/schemas/upload.candidate.section/upload.about.schema";
import { UploadCandidateEducation, UploadCandidateEducationSchema } from "src/schemas/upload.candidate.section/upload.education.schema";
import { UploadCandidateEmployment, UploadCandidateEmploymentSchema } from "src/schemas/upload.candidate.section/upload.employment.schema";
import { UploadVideoController } from "./upload.video/upload.video.controller";
import { UploadVideService } from "./upload.video/upload.video.service";
import { UploadCandidateVideo, UploadCandidateVideoSchema } from "src/schemas/upload.candidate.section/upload.video.schema";

@Module({
    imports:[
      
        MongooseModule.forFeature([{name: UploadCandidateAbout.name , schema: UploadCandidateAboutschema} ]) , 
        MongooseModule.forFeature([{name: UploadCandidateProject.name , schema : UploadCandidateProjectSchema}]) , 
        MongooseModule.forFeature([{name: UploadCandidateEducation.name , schema : UploadCandidateEducationSchema}]),
        MongooseModule.forFeature([{name: UploadCandidateEmployment.name , schema : UploadCandidateEmploymentSchema}]),
        MongooseModule.forFeature([{name: UploadCandidateVideo.name ,  schema :UploadCandidateVideoSchema}])

    ],
    controllers:[UploadResumeController  , UploadVideoController],
    providers:[UploadCandidateService , UploadVideService]
})

export class UploadCandidateModule{}