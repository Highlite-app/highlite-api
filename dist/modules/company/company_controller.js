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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDetailsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const company_details_dto_1 = require("../../dtos/company/company.details.dto");
const uuid_1 = require("uuid");
const user_type_enum_1 = require("../../enums/user.type.enum");
const jwt_service_1 = require("../JwtModule/jwt.service");
const company_service_1 = require("./company.service");
let CompanyDetailsController = class CompanyDetailsController {
    constructor(jwtServices, companyService) {
        this.jwtServices = jwtServices;
        this.companyService = companyService;
    }
    async CompanyDetails(companyDetailsDto) {
        const userId = (0, uuid_1.v4)();
        const user = { username: companyDetailsDto.userName, id: userId };
        const accessToken = await this.jwtServices.generateToken(user);
        const tokenId = await this.companyService.getTokenId();
        this.companyService.companyDetails(companyDetailsDto, userId);
        return {
            "status": true,
            "data": {
                id: userId,
                message: "Data Stored Successfully",
                accessToken: accessToken,
                tokenId: tokenId,
                userType: user_type_enum_1.UserTypeEnum.company,
                isLoggedIn: true
            }
        };
    }
    async getCompanyDetails(companyId) {
        console.log("The userid for CompanyDetails is :: " + companyId);
        const compayDetails = await this.companyService.getCompanyDetails(companyId);
        if (!compayDetails) {
            throw new common_1.NotFoundException("Company Details not found");
        }
        return compayDetails;
    }
    async updateCompanyDetails(companyId, updateCompany) {
        try {
            const updateCompanyDetails = await this.companyService.updateCompany(companyId, updateCompany);
            return {
                message: "Company Details Updated Successfully",
                company: updateCompanyDetails
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Candidate not found');
            }
            throw error;
        }
    }
};
exports.CompanyDetailsController = CompanyDetailsController;
__decorate([
    (0, common_1.Post)('companyOnBoarding'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_details_dto_1.CompanyOnBoardingDTO]),
    __metadata("design:returntype", Promise)
], CompanyDetailsController.prototype, "CompanyDetails", null);
__decorate([
    (0, common_1.Get)('getCompanyUserDetails/:companyId'),
    __param(0, (0, common_1.Param)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyDetailsController.prototype, "getCompanyDetails", null);
__decorate([
    (0, common_1.Put)('updateCompanyUserDetails/:companyId'),
    __param(0, (0, common_1.Param)('companyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompanyDetailsController.prototype, "updateCompanyDetails", null);
exports.CompanyDetailsController = CompanyDetailsController = __decorate([
    (0, common_1.Controller)("Company"),
    (0, swagger_1.ApiTags)("User-OnBoaring-Company"),
    __metadata("design:paramtypes", [jwt_service_1.JwtServices,
        company_service_1.CompanyService])
], CompanyDetailsController);
//# sourceMappingURL=company_controller.js.map