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
exports.CompanyJobFeedResponseDTO = void 0;
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const company_job_post_dto_1 = require("../../company/company.job.post.dto");
const company_details_dto_1 = require("../../company/company.details.dto");
const company_home_feed_details_dto_1 = require("./company.home.feed.details.dto");
class CompanyJobFeedResponseDTO {
}
exports.CompanyJobFeedResponseDTO = CompanyJobFeedResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the Job Video Feed ID", example: '98827e2-100b-428d-88f8-9fc261d07c3a', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Job Video Feed ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyJobFeedResponseDTO.prototype, "jobVideoFeedId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the Playback ID", example: "playback_12345", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Playback ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyJobFeedResponseDTO.prototype, "playbackId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the Company ID", example: "company_12345", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Company ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyJobFeedResponseDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the Upload ID", example: "upload_12345", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Upload ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyJobFeedResponseDTO.prototype, "uploadId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the Asset ID", example: "asset_12345", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Asset ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyJobFeedResponseDTO.prototype, "assetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the Thumbnail Width", example: "640", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Thumbnail Width cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyJobFeedResponseDTO.prototype, "thumbnailWidth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the Thumbnail Height", example: "360", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Thumbnail Height cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyJobFeedResponseDTO.prototype, "thumbnailHeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the Job Status", example: "active", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Job Status cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyJobFeedResponseDTO.prototype, "jobStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: company_details_dto_1.CompanyOnBoardingDTO }),
    (0, class_transformer_1.Type)(() => company_details_dto_1.CompanyOnBoardingDTO),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", company_details_dto_1.CompanyOnBoardingDTO)
], CompanyJobFeedResponseDTO.prototype, "companyOnboarding", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: company_home_feed_details_dto_1.CompanyHomeFeedDetailsDTO }),
    (0, class_transformer_1.Type)(() => company_home_feed_details_dto_1.CompanyHomeFeedDetailsDTO),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", company_home_feed_details_dto_1.CompanyHomeFeedDetailsDTO)
], CompanyJobFeedResponseDTO.prototype, "companyHomeFeedDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: company_job_post_dto_1.CompanyJobPostDTO }),
    (0, class_transformer_1.Type)(() => company_job_post_dto_1.CompanyJobPostDTO),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", company_job_post_dto_1.CompanyJobPostDTO)
], CompanyJobFeedResponseDTO.prototype, "companyJobPost", void 0);
//# sourceMappingURL=company_job_feed_response_dto.js.map