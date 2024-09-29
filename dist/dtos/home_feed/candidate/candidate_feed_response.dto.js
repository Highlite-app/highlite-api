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
exports.CandidateFeedResponseDTO = void 0;
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const candidate_details_1 = require("../../../modules/candidate/model/candidate.details");
const upload_about_dto_1 = require("../../upload.candate.section/upload.resume/upload.about.dto");
const upload_employment_schema_1 = require("../../../schemas/upload.candidate.section/upload.employment.schema");
const upload_education_schema_1 = require("../../../schemas/upload.candidate.section/upload.education.schema");
const upload_proejct_schema_1 = require("../../../schemas/upload.candidate.section/upload.proejct.schema");
const candidate_onboarding_dto_1 = require("../../candidate/candidate.onboarding.dto");
class CandidateFeedResponseDTO {
}
exports.CandidateFeedResponseDTO = CandidateFeedResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the Candidate Video Feed ID", example: '98827e2-100b-428d-88f8-9fc261d07c3a', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Candidate Video Feed ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateFeedResponseDTO.prototype, "candidateVideoFeedId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the Candidate ID", example: '98827e2-100b-428d-88f8-9fc261d07c3a', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Candidate ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateFeedResponseDTO.prototype, "candidateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the description", example: 'Candidate description', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Description cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateFeedResponseDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the thumbnail URL", example: 'http://example.com/thumbnail.jpg', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Thumbnail URL cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateFeedResponseDTO.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the thumbnail width", example: '1920', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Thumbnail width cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateFeedResponseDTO.prototype, "thumbnailWidth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the thumbnail height", example: '1080', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Thumbnail height cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateFeedResponseDTO.prototype, "thumbnailHeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the playback ID", example: 'playbackId123', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Playback ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateFeedResponseDTO.prototype, "playbackId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the asset ID", example: 'assetId123', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Asset ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateFeedResponseDTO.prototype, "assetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the upload ID", example: 'uploadId123', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Upload ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateFeedResponseDTO.prototype, "uploadId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Tags associated with the candidate", example: ['tag1', 'tag2'], required: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CandidateFeedResponseDTO.prototype, "tag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Categories associated with the candidate", example: ['category1', 'category2'], required: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CandidateFeedResponseDTO.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Candidate onboarding details", type: candidate_details_1.CandidateDetails }),
    (0, class_transformer_1.Type)(() => candidate_onboarding_dto_1.CandidateOnBoardingDto),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", candidate_onboarding_dto_1.CandidateOnBoardingDto)
], CandidateFeedResponseDTO.prototype, "candidateOnBoarding", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "About the candidate", type: upload_about_dto_1.UploadAboutDTO }),
    (0, class_transformer_1.Type)(() => upload_about_dto_1.UploadAboutDTO),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", upload_about_dto_1.UploadAboutDTO)
], CandidateFeedResponseDTO.prototype, "aboutCandidate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Candidate's employment history", type: [upload_employment_schema_1.UploadCandidateEmployment], required: false }),
    (0, class_transformer_1.Type)(() => upload_employment_schema_1.UploadCandidateEmployment),
    __metadata("design:type", Array)
], CandidateFeedResponseDTO.prototype, "candidateEmployment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Candidate's education details", type: [upload_education_schema_1.UploadCandidateEducation], required: false }),
    (0, class_transformer_1.Type)(() => upload_education_schema_1.UploadCandidateEducation),
    __metadata("design:type", Array)
], CandidateFeedResponseDTO.prototype, "candidateEducation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Candidate's project details", type: [upload_proejct_schema_1.UploadCandidateProject], required: false }),
    (0, class_transformer_1.Type)(() => upload_proejct_schema_1.UploadCandidateProject),
    __metadata("design:type", Array)
], CandidateFeedResponseDTO.prototype, "candidateProject", void 0);
//# sourceMappingURL=candidate_feed_response.dto.js.map