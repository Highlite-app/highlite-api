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
exports.CompanyOnBoardingDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CompanyOnBoardingDTO {
}
exports.CompanyOnBoardingDTO = CompanyOnBoardingDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyOnBoardingDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0260 LABS LLC' }),
    (0, class_validator_1.IsNotEmpty)({ message: "Company ID Cannot Be Empty . Create a Company Profile To Get CompanyID" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyOnBoardingDTO.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is industry", example: 'IT' }),
    (0, class_validator_1.IsNotEmpty)({ message: "Industry canmnot be empty" }),
    __metadata("design:type", String)
], CompanyOnBoardingDTO.prototype, "industry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Kolkata' }),
    (0, class_validator_1.IsNotEmpty)({ message: "City cannot empty" }),
    __metadata("design:type", String)
], CompanyOnBoardingDTO.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'India' }),
    (0, class_validator_1.IsNotEmpty)({ message: "Country cannot be  empty" }),
    __metadata("design:type", String)
], CompanyOnBoardingDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Website cannot be emplty" }),
    __metadata("design:type", String)
], CompanyOnBoardingDTO.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "company Size", example: "0-100" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Company size cannot be empty" }),
    __metadata("design:type", String)
], CompanyOnBoardingDTO.prototype, "companySize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], description: "Comapany Benifit", example: ["Work From Home", 'Health Insurance'] }),
    (0, class_validator_1.IsNotEmpty)({ message: "Company benifit cannot be empty" }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CompanyOnBoardingDTO.prototype, "benefits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "About Company cannot be empty", example: "Our company do strategy planning and development, media planning and buying, market research and brand development, promotions and sales tactics, data analytics and insights and advertising production across multiple media." }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CompanyOnBoardingDTO.prototype, "about", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "emnail", example: "mobiledev@srijanmukhopadhyay.com" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Email Address is required to OnBoard a company" }),
    __metadata("design:type", String)
], CompanyOnBoardingDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "username", example: "sreejan2306" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Username cannot be empty" }),
    __metadata("design:type", String)
], CompanyOnBoardingDTO.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "username", example: "sreejan2306", required: false }),
    __metadata("design:type", String)
], CompanyOnBoardingDTO.prototype, "companyLogo", void 0);
//# sourceMappingURL=company.details.dto.js.map