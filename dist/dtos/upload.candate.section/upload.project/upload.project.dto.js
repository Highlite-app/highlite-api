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
exports.CandidateProjectDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const project_status_enum_1 = require("../../../enums/project.status.enum");
class CandidateProjectDTO {
}
exports.CandidateProjectDTO = CandidateProjectDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Primary Key", example: "c96acdb2-a76e-4b0f-8dfb-cdfac2f3dde8", required: false }),
    __metadata("design:type", String)
], CandidateProjectDTO.prototype, "projectId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Resume ID is must to ensure data belong to which candiate", example: "c96acdb2-a76e-4b0f-8dfb-cdfac2f3dde8" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CandidateProjectDTO.prototype, "candidateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Project title", example: "E-commerce Application" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CandidateProjectDTO.prototype, "projectTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Project Client", example: '0260 LABS LLC' }),
    (0, class_validator_1.IsNotEmpty)({ message: "Project Tag with employment and education cannot be emplty" }),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", String)
], CandidateProjectDTO.prototype, "projectClient", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Project Status", enum: project_status_enum_1.PorjectStatus, example: project_status_enum_1.PorjectStatus.IN_PROGRESS }),
    (0, class_validator_1.IsEnum)(project_status_enum_1.PorjectStatus),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CandidateProjectDTO.prototype, "projectStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Work From", example: "2022-01-01" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CandidateProjectDTO.prototype, "projectStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Work Till", example: '2023-01-01', required: false }),
    (0, class_validator_1.ValidateIf)(o => o.projectStatus == project_status_enum_1.PorjectStatus.FINISHED),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CandidateProjectDTO.prototype, "projectFinish", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Project Details", example: "Here the main Problem Statement is Quick and reiable medicine delivery which is solved through this app " }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CandidateProjectDTO.prototype, "projectDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Skills used in the project", example: ['Flutter ', 'Aws', 'NestJS'], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CandidateProjectDTO.prototype, "projectSkills", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Tools used in the project", example: ['Android Studio ', 'Visual Studio', 'Figma'], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CandidateProjectDTO.prototype, "projectTools", void 0);
//# sourceMappingURL=upload.project.dto.js.map