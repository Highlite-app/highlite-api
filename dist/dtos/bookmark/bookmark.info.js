"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkInfo = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const company_details_dto_1 = require("../company/company.details.dto");
const company_job_post_dto_1 = require("../company/company.job.post.dto");
const candidate_onboarding_dto_1 = require("../candidate/candidate.onboarding.dto");
const upload_video_dto_1 = require("../upload.candate.section/upload.video/upload.video.dto");
const company_job_post_video_feed_dto_1 = require("../company/company.job.post.video.feed.dto");
const company_home_feed_details_dto_1 = require("../home_feed/company/company.home.feed.details.dto");
const candidate_home_feed_details_dto_1 = require("../home_feed/candidate/candidate.home.feed.details.dto");
const upload_education_schema_1 = require("../../schemas/upload.candidate.section/upload.education.schema");
const upload_employment_schema_1 = require("../../schemas/upload.candidate.section/upload.employment.schema");
const upload_proejct_schema_1 = require("../../schemas/upload.candidate.section/upload.proejct.schema");
const upload_about_schema_1 = require("../../schemas/upload.candidate.section/upload.about.schema");
class BookmarkInfo {
}
exports.BookmarkInfo = BookmarkInfo;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the Bookmark Info ID", example: 'binfo123', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Bookmark Info ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BookmarkInfo.prototype, "bookmarkInfoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Type of the bookmark info", example: 'companyOnboarding', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Type cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BookmarkInfo.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "ID of the bookmark collection", example: 'bcol123', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Bookmark Collection ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BookmarkInfo.prototype, "bookmarkCollectionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Reference ID for the bookmark", example: 'ref123', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Reference ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BookmarkInfo.prototype, "referenceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Candidate Onboarding associated with the bookmark" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => candidate_onboarding_dto_1.CandidateOnBoardingDto),
    __metadata("design:type", Object)
], BookmarkInfo.prototype, "candidateOnBoarding", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Candidate Video Feed associated with the bookmark" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => upload_video_dto_1.UploadVideoDTO),
    __metadata("design:type", Object)
], BookmarkInfo.prototype, "candidateVideoFeed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "About Candidate associated with the bookmark" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => upload_about_schema_1.UploadCandidateAbout),
    __metadata("design:type", Object)
], BookmarkInfo.prototype, "aboutCandidate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "List of Candidate Education associated with the bookmark" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => upload_education_schema_1.UploadCandidateEducation),
    __metadata("design:type", Array)
], BookmarkInfo.prototype, "candidateEducation", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "List of Candidate Employment associated with the bookmark" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => upload_employment_schema_1.UploadCandidateEmployment),
    __metadata("design:type", Array)
], BookmarkInfo.prototype, "candidateEmployment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "List of Candidate Projects associated with the bookmark" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => upload_proejct_schema_1.UploadCandidateProject),
    __metadata("design:type", Array)
], BookmarkInfo.prototype, "candidateProject", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Candidate Home Feed Details associated with the bookmark" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => candidate_home_feed_details_dto_1.CandidateHomeFeedDetailsDTO),
    __metadata("design:type", Object)
], BookmarkInfo.prototype, "candidateHomeFeedDetails", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Company Onboarding associated with the bookmark" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => company_details_dto_1.CompanyOnBoardingDTO),
    __metadata("design:type", Object)
], BookmarkInfo.prototype, "companyOnboarding", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Job Posting associated with the bookmark" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => company_job_post_dto_1.CompanyJobPostDTO),
    __metadata("design:type", Object)
], BookmarkInfo.prototype, "jobPosting", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Company Home Feed Details associated with the bookmark" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => company_home_feed_details_dto_1.CompanyHomeFeedDetailsDTO),
    __metadata("design:type", Object)
], BookmarkInfo.prototype, "companyHomeFeedDetails", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Company Job Post Video Feed associated with the bookmark" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => company_job_post_video_feed_dto_1.CompanyJobPostVideoFeedDTO),
    __metadata("design:type", Object)
], BookmarkInfo.prototype, "companyJobPostVideoFeed", void 0);
//# sourceMappingURL=bookmark.info.js.map