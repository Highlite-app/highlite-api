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
exports.UploadAboutDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UploadAboutDTO {
}
exports.UploadAboutDTO = UploadAboutDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Primary Key', example: 'AboutId', required: false }),
    __metadata("design:type", String)
], UploadAboutDTO.prototype, "aboutId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Candidate ID , when a candidate is onBoarding for the first time', example: 'c96acdb2-a76e-4b0f-8dfb-cdfac2f3dde8' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadAboutDTO.prototype, "candidateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'About Candidate', example: 'I am a software developer' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadAboutDTO.prototype, "aboutCandidate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Languages', example: ['English', 'Bengali', 'Hindi'] }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Languages cannot be empty' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UploadAboutDTO.prototype, "languages", void 0);
//# sourceMappingURL=upload.about.dto.js.map