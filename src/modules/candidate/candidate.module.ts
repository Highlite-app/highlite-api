import { Module } from "@nestjs/common";
import { MongooseModule, Schema } from "@nestjs/mongoose";
import { CandidateDetails, CandidateModelSchema } from "./model/candidate.details";
import { CandidateDeatilsController } from "./candidate.controller";
import { CandidateService } from "./candidate.service";
import { JwtService } from "@nestjs/jwt";
import { DateTimeService } from "src/services/datetime.service";
import { JWTModule } from "../JwtModule/auth.module";
import { CandidateFeedController } from "../home_feed/candidate/candidate.feed.controller";
import { CandidateFeedService } from "../home_feed/candidate/candidate.feed.service";
import { UploadCandidateProject, UploadCandidateProjectSchema } from "src/schemas/upload.candidate.section/upload.proejct.schema";
import { UploadCandidateAbout, UploadCandidateAboutschema } from "src/schemas/upload.candidate.section/upload.about.schema";
import { UploadCandidateEducation, UploadCandidateEducationSchema } from "src/schemas/upload.candidate.section/upload.education.schema";
import { UploadCandidateEmployment, UploadCandidateEmploymentSchema } from "src/schemas/upload.candidate.section/upload.employment.schema";
import { UploadCandidateVideo, UploadCandidateVideoSchema } from "src/schemas/upload.candidate.section/upload.video.schema";
import { UploadResumeController } from "../upload.candidate.section/upload.resume/upload.resume.controller";
import { UploadVideoController } from "../upload.candidate.section/upload.video/upload.video.controller";
import { UploadVideService } from "../upload.candidate.section/upload.video/upload.video.service";
import { UploadCandidateService } from "../upload.candidate.section/upload.resume/upload.candidate.service";

@Module({
    imports:[
       MongooseModule.forFeature([{name: CandidateDetails.name , schema: CandidateModelSchema}]),
       MongooseModule.forFeature([{name: UploadCandidateAbout.name , schema: UploadCandidateAboutschema} ]) , 
       MongooseModule.forFeature([{name: UploadCandidateProject.name , schema : UploadCandidateProjectSchema}]) , 
       MongooseModule.forFeature([{name: UploadCandidateEducation.name , schema : UploadCandidateEducationSchema}]),
       MongooseModule.forFeature([{name: UploadCandidateEmployment.name , schema : UploadCandidateEmploymentSchema}]),
       MongooseModule.forFeature([{name: UploadCandidateVideo.name ,  schema :UploadCandidateVideoSchema}]),
    
 
      JWTModule
    ],
    controllers:[CandidateDeatilsController , CandidateFeedController , UploadResumeController , UploadVideoController ],
    providers:[CandidateService  , DateTimeService , JwtService , CandidateFeedService , UploadVideService , UploadCandidateService ],
    exports:[CandidateService , MongooseModule , UploadCandidateService , UploadVideService , JwtService , JWTModule] 
})
export class CandidateModule{}