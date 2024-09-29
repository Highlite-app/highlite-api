import { Module } from "@nestjs/common";

import { MongooseModule, Schema } from "@nestjs/mongoose";
import { Bookmark, BookmarkSchema } from "src/schemas/bookmark/bookmark.schema";
import { BookmarkController } from "./bookmark.cotroller";
import { BookmarkService } from "./bookmark.service";
import { UploadCandidateService } from "../upload.candidate.section/upload.resume/upload.candidate.service";
import { UploadVideService } from "../upload.candidate.section/upload.video/upload.video.service";
import { CompanyService } from "../company/company.service";
import { DateTimeService } from "src/services/datetime.service";
import { CandidateDetails, CandidateModelSchema } from "../candidate/model/candidate.details";
import { CandidateModule } from "../candidate/candidate.module";
import { CandidateService } from "../candidate/candidate.service";
import { CandidateDeatilsController } from "../candidate/candidate.controller";
import { CompanyModule } from "../company/company.module";

@Module({
imports:[
    MongooseModule.forFeature([{name: Bookmark.name ,  schema :BookmarkSchema}]),
    CandidateModule ,
    CompanyModule
],
controllers: [BookmarkController , CandidateDeatilsController],
providers:[BookmarkService]
}) 

export class BookmarkModule{}