import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import CompanyDetails, { CompanyDetailsSchemas } from "./models/company.details.model";
import { CompanyDetailsSchema } from "src/schemas/company/company.schema";
import { CompanyDetailsController } from "./company_controller";
import { CompanyService } from "./company.service";
import { DateTimeService } from "src/services/datetime.service";
import { CompanyJobPostController } from "./company.job.post.controller";
import { CompanyJobPostDetails, CompanyJobPostDetailsSchema } from "./models/company.job.post.model";
import { CompanyJobPostSchema } from "src/schemas/company/company.job.post.schema";
import { CompanyJobPostVideFeedSchema, CompanyJobPostVideoFeed } from "./models/company.job.post.video.feed";
import { CompanyJobPostVideoFeedController } from "./company.job.post.video.feed.controller";
import { CandidateHomeFeedController } from "../home_feed/candidate/candidate.home.feed.controller";
 import { CandidateHomeFeedService } from "../home_feed/candidate/candidate.home.feed.service";
import { CandidateFollowingController } from "../home-feed.following/candidate.following.controller";
import { CandidateFollowingService } from "../home-feed.following/candidate.following.servce";
import { CandidateService } from "../candidate/candidate.service";
import { CandidateModule } from "../candidate/candidate.module";
import { CandidateLikeController } from "../homefeed.like/homefeed.like.controller";
import { CompanyHomeFeedDetailsController } from "./company.home.feed.details.controller";
import { JWTModule } from "../JwtModule/auth.module";
import { CompamnyHomeFeedDetailsSchema, CompanyHomeFeedDetails } from "./models/company.home.feed.details";
import { UploadCandidateService } from "../upload.candidate.section/upload.resume/upload.candidate.service";
import { UploadVideService } from "../upload.candidate.section/upload.video/upload.video.service";

@Module({
    imports: [

        MongooseModule.forFeature([{ name: CompanyDetails.name, schema: CompanyDetailsSchemas }]),
        MongooseModule.forFeature([{ name: CompanyJobPostDetails.name, schema: CompanyJobPostDetailsSchema }]),
        MongooseModule.forFeature([{ name: CompanyJobPostVideoFeed.name, schema: CompanyJobPostVideFeedSchema }]),
        MongooseModule.forFeature([{ name: CompanyHomeFeedDetails.name, schema: CompamnyHomeFeedDetailsSchema }]),
        JWTModule,
        CandidateModule
        
    ],
    controllers: [ CompanyDetailsController, CompanyHomeFeedDetailsController ,CompanyJobPostController , CompanyJobPostVideoFeedController   , CandidateHomeFeedController ,   CandidateFollowingController , CandidateLikeController] ,
    providers: [ CompanyService, DateTimeService  ,  CandidateFollowingService  , CandidateHomeFeedService],
    exports: [   CompanyService,
        DateTimeService,
        CandidateFollowingService,
        CandidateHomeFeedService,
        MongooseModule, ],
})
export class CompanyModule {}