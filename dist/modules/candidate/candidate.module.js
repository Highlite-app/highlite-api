"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const candidate_details_1 = require("./model/candidate.details");
const candidate_controller_1 = require("./candidate.controller");
const candidate_service_1 = require("./candidate.service");
const jwt_1 = require("@nestjs/jwt");
const datetime_service_1 = require("../../services/datetime.service");
const auth_module_1 = require("../JwtModule/auth.module");
const candidate_feed_controller_1 = require("../home_feed/candidate/candidate.feed.controller");
const candidate_feed_service_1 = require("../home_feed/candidate/candidate.feed.service");
const upload_proejct_schema_1 = require("../../schemas/upload.candidate.section/upload.proejct.schema");
const upload_about_schema_1 = require("../../schemas/upload.candidate.section/upload.about.schema");
const upload_education_schema_1 = require("../../schemas/upload.candidate.section/upload.education.schema");
const upload_employment_schema_1 = require("../../schemas/upload.candidate.section/upload.employment.schema");
const upload_video_schema_1 = require("../../schemas/upload.candidate.section/upload.video.schema");
const upload_resume_controller_1 = require("../upload.candidate.section/upload.resume/upload.resume.controller");
const upload_video_controller_1 = require("../upload.candidate.section/upload.video/upload.video.controller");
const upload_video_service_1 = require("../upload.candidate.section/upload.video/upload.video.service");
const upload_candidate_service_1 = require("../upload.candidate.section/upload.resume/upload.candidate.service");
let CandidateModule = class CandidateModule {
};
exports.CandidateModule = CandidateModule;
exports.CandidateModule = CandidateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: candidate_details_1.CandidateDetails.name, schema: candidate_details_1.CandidateModelSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: upload_about_schema_1.UploadCandidateAbout.name, schema: upload_about_schema_1.UploadCandidateAboutschema }]),
            mongoose_1.MongooseModule.forFeature([{ name: upload_proejct_schema_1.UploadCandidateProject.name, schema: upload_proejct_schema_1.UploadCandidateProjectSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: upload_education_schema_1.UploadCandidateEducation.name, schema: upload_education_schema_1.UploadCandidateEducationSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: upload_employment_schema_1.UploadCandidateEmployment.name, schema: upload_employment_schema_1.UploadCandidateEmploymentSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: upload_video_schema_1.UploadCandidateVideo.name, schema: upload_video_schema_1.UploadCandidateVideoSchema }]),
            auth_module_1.JWTModule
        ],
        controllers: [candidate_controller_1.CandidateDeatilsController, candidate_feed_controller_1.CandidateFeedController, upload_resume_controller_1.UploadResumeController, upload_video_controller_1.UploadVideoController],
        providers: [candidate_service_1.CandidateService, datetime_service_1.DateTimeService, jwt_1.JwtService, candidate_feed_service_1.CandidateFeedService, upload_video_service_1.UploadVideService, upload_candidate_service_1.UploadCandidateService],
        exports: [candidate_service_1.CandidateService, mongoose_1.MongooseModule, upload_candidate_service_1.UploadCandidateService, upload_video_service_1.UploadVideService, jwt_1.JwtService, auth_module_1.JWTModule]
    })
], CandidateModule);
//# sourceMappingURL=candidate.module.js.map