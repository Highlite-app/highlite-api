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
exports.CandidateOnBoardingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const work_type_enum_1 = require("../../enums/work.type.enum");
const job_duration_enum_1 = require("../../enums/job.duration.enum");
class CandidateOnBoardingDto {
}
exports.CandidateOnBoardingDto = CandidateOnBoardingDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'id' }),
    __metadata("design:type", String)
], CandidateOnBoardingDto.prototype, "candidateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Srijan" }),
    __metadata("design:type", String)
], CandidateOnBoardingDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Mukhopadhyay" }),
    __metadata("design:type", String)
], CandidateOnBoardingDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Lead Flutter Developer" }),
    __metadata("design:type", String)
], CandidateOnBoardingDto.prototype, "position", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CandidateOnBoardingDto.prototype, "skills", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CandidateOnBoardingDto.prototype, "tools", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "WorkType Enum", example: work_type_enum_1.WorkTypeEnum.remote, required: true }),
    (0, class_validator_1.IsEnum)(work_type_enum_1.WorkTypeEnum, { message: "Work Type must be remote, inOffice, or both" }),
    __metadata("design:type", String)
], CandidateOnBoardingDto.prototype, "workType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "JobDuration Enum", example: job_duration_enum_1.JobDurationEnum.fullTime, required: true }),
    (0, class_validator_1.IsEnum)(job_duration_enum_1.JobDurationEnum, { message: "Job Duration must be fullTime, partTime, or both" }),
    (0, class_validator_1.IsNotEmpty)({ message: "JobDuration cannot be empty" }),
    __metadata("design:type", String)
], CandidateOnBoardingDto.prototype, "jobDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Salary", example: "20", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Salary must not be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateOnBoardingDto.prototype, "salary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Bangalore" }),
    (0, class_validator_1.IsNotEmpty)({ message: "City cannot be empty" }),
    __metadata("design:type", String)
], CandidateOnBoardingDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "India" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Country cannot be empty" }),
    __metadata("design:type", String)
], CandidateOnBoardingDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "srijanmukhopadhyay9@gmail.com" }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Email cannot be empty" }),
    __metadata("design:type", String)
], CandidateOnBoardingDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "sreejan@2306" }),
    __metadata("design:type", String)
], CandidateOnBoardingDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Hey I am Flutter developer', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateOnBoardingDto.prototype, "about", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], CandidateOnBoardingDto.prototype, "profilePicture", void 0);
//# sourceMappingURL=candidate.onboarding.dto.js.map