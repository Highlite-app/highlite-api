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
exports.CompanyJobPostDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const job_duration_enum_1 = require("../../enums/job.duration.enum");
const job_status_enum_1 = require("../../enums/job.status.enum");
const work_type_enum_1 = require("../../enums/work.type.enum");
class CompanyJobPostDTO {
}
exports.CompanyJobPostDTO = CompanyJobPostDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is primary Key", example: '98827e2-100b-428d-88f8-9fc261d07c3a', required: false }),
    __metadata("design:type", String)
], CompanyJobPostDTO.prototype, "jobPostId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is CompanyId", example: "98827e2-100b-428d-88f8-9fc261d07c3a", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Company ID Cannot Be Empty. Create a Company Profile To Get CompanyID" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyJobPostDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is VideoFeed Id, required for Data Joining", example: "98827e2-100b-428d-88f8-9fc261d07c3a", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Video Feed Id cannot be empty, since must be attached with the JobPost" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyJobPostDTO.prototype, "jobVideoFeedId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Job Post Description", example: "We are actively hiring for Application Developer", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Description cannot be empty, since its required to understand the Job Post" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyJobPostDTO.prototype, "jobDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Location", example: "Mountain View, USA", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Location cannot be empty" }),
    (0, class_validator_1.IsString)({ message: "Data Type must be a string" }),
    __metadata("design:type", String)
], CompanyJobPostDTO.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Position", example: "UI/UX", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Position is required to match with appropriate skilled candidate" }),
    (0, class_validator_1.IsString)({ message: "Data Type must be a string" }),
    __metadata("design:type", String)
], CompanyJobPostDTO.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: ["Flutter", "Android", "NestJS"] }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CompanyJobPostDTO.prototype, "skills", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: ["Figma", "ChatGPT", "Airtable"] }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CompanyJobPostDTO.prototype, "tools", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "WorkType Enum", example: work_type_enum_1.WorkTypeEnum.remote, required: true }),
    (0, class_validator_1.IsEnum)(work_type_enum_1.WorkTypeEnum, { message: "Work Type must be remote, inOffice, or both" }),
    (0, class_validator_1.IsNotEmpty)({ message: "WorkType cannot be empty" }),
    __metadata("design:type", String)
], CompanyJobPostDTO.prototype, "workType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "JobDuration Enum", example: job_duration_enum_1.JobDurationEnum.fullTime, required: true }),
    (0, class_validator_1.IsEnum)(job_duration_enum_1.JobDurationEnum, { message: "Job Duration must be fullTime, partTime, or both" }),
    (0, class_validator_1.IsNotEmpty)({ message: "JobDuration cannot be empty" }),
    __metadata("design:type", String)
], CompanyJobPostDTO.prototype, "jobDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Salary", example: "20", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Salary must be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyJobPostDTO.prototype, "salary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "JobStatus enum", example: job_status_enum_1.JobStatusEnum.active, required: true }),
    (0, class_validator_1.IsEnum)(job_status_enum_1.JobStatusEnum, { message: "JobStatus can be active or inactive" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CompanyJobPostDTO.prototype, "status", void 0);
//# sourceMappingURL=company.job.post.dto.js.map