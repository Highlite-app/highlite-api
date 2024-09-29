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
exports.CandidateEmploymentDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const employment_status_enum_1 = require("../../../enums/employment.status.enum");
class CandidateEmploymentDTO {
}
exports.CandidateEmploymentDTO = CandidateEmploymentDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Primary Key', example: 'EmploymentId', required: false }),
    __metadata("design:type", String)
], CandidateEmploymentDTO.prototype, "employmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Candidate ID , when a candidate is onBoarding for the first time Foreign Key', example: 'c96acdb2-a76e-4b0f-8dfb-cdfac2f3dde8' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateEmploymentDTO.prototype, "candidateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employment Status', enum: employment_status_enum_1.EmploymentStatus, example: employment_status_enum_1.EmploymentStatus.Employed }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(employment_status_enum_1.EmploymentStatus),
    __metadata("design:type", String)
], CandidateEmploymentDTO.prototype, "employmentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'employmentType', example: 'Full Time/Part Time' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateEmploymentDTO.prototype, "employmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Title', example: 'Company Title' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateEmploymentDTO.prototype, "employmentTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current Company Name', example: 'ABC Corp' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateEmploymentDTO.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Work Till', example: 'Present' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateEmploymentDTO.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Industry', example: 'IT' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateEmploymentDTO.prototype, "endDate", void 0);
//# sourceMappingURL=upload.employment.dto.js.map