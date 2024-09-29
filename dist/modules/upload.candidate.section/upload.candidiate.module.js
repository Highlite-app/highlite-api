"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadCandidateModule = void 0;
const common_1 = require("@nestjs/common");
const upload_resume_controller_1 = require("./upload.resume/upload.resume.controller");
const upload_candidate_service_1 = require("./upload.resume/upload.candidate.service");
const mongoose_1 = require("@nestjs/mongoose");
const upload_proejct_schema_1 = require("../../schemas/upload.candidate.section/upload.proejct.schema");
const upload_about_schema_1 = require("../../schemas/upload.candidate.section/upload.about.schema");
const upload_education_schema_1 = require("../../schemas/upload.candidate.section/upload.education.schema");
const upload_employment_schema_1 = require("../../schemas/upload.candidate.section/upload.employment.schema");
const upload_video_controller_1 = require("./upload.video/upload.video.controller");
const upload_video_service_1 = require("./upload.video/upload.video.service");
const upload_video_schema_1 = require("../../schemas/upload.candidate.section/upload.video.schema");
let UploadCandidateModule = class UploadCandidateModule {
};
exports.UploadCandidateModule = UploadCandidateModule;
exports.UploadCandidateModule = UploadCandidateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: upload_about_schema_1.UploadCandidateAbout.name, schema: upload_about_schema_1.UploadCandidateAboutschema }]),
            mongoose_1.MongooseModule.forFeature([{ name: upload_proejct_schema_1.UploadCandidateProject.name, schema: upload_proejct_schema_1.UploadCandidateProjectSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: upload_education_schema_1.UploadCandidateEducation.name, schema: upload_education_schema_1.UploadCandidateEducationSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: upload_employment_schema_1.UploadCandidateEmployment.name, schema: upload_employment_schema_1.UploadCandidateEmploymentSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: upload_video_schema_1.UploadCandidateVideo.name, schema: upload_video_schema_1.UploadCandidateVideoSchema }])
        ],
        controllers: [upload_resume_controller_1.UploadResumeController, upload_video_controller_1.UploadVideoController],
        providers: [upload_candidate_service_1.UploadCandidateService, upload_video_service_1.UploadVideService]
    })
], UploadCandidateModule);
//# sourceMappingURL=upload.candidiate.module.js.map