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
exports.CandidateEducationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CandidateEducationDTO {
}
exports.CandidateEducationDTO = CandidateEducationDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Primary Key', example: 'EducationId', required: false }),
    __metadata("design:type", String)
], CandidateEducationDTO.prototype, "educationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Candidate ID , when a candidate is onBoarding for the first time Foreign Key', example: 'c96acdb2-a76e-4b0f-8dfb-cdfac2f3dde8' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateEducationDTO.prototype, "candidateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'School', example: 'University of Texus' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateEducationDTO.prototype, "school", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Degree', example: 'Bachelor of Technology' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateEducationDTO.prototype, "degree", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Specialization', example: 'Computer Science' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateEducationDTO.prototype, "specialization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start Date', example: '2026' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateEducationDTO.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End Date', example: '2026' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CandidateEducationDTO.prototype, "endDate", void 0);
//# sourceMappingURL=upload.education.dto.js.map