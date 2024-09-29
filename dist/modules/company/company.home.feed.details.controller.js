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
exports.CompanyHomeFeedDetailsController = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("./company.service");
const uuid_1 = require("uuid");
const swagger_1 = require("@nestjs/swagger");
const company_home_feed_details_dto_1 = require("../../dtos/home_feed/company/company.home.feed.details.dto");
let CompanyHomeFeedDetailsController = class CompanyHomeFeedDetailsController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    async createCompanyHomeFeedDetails(companyHomeFeedDetails) {
        const companHomeFeedDetailsId = (0, uuid_1.v4)();
        const companyFeedDetails = await this.companyService.createCompanyHomeFeedDetails(companyHomeFeedDetails, companHomeFeedDetailsId);
        try {
            return {
                companHomeFeedDetailsId: companHomeFeedDetailsId
            };
        }
        catch (error) {
            throw new common_1.NotAcceptableException(error);
        }
    }
    async getCompanyHomeFeedDetails(companHomeFeedDetailsId) {
        console.log("The companHomeFeedDetailsId for CompanyHomeFeedDetails is :: " + companHomeFeedDetailsId);
        const companyHomeFeedDetails = await this.companyService.getCompanyHomeFeedDetails(companHomeFeedDetailsId);
        if (companyHomeFeedDetails) {
            throw new common_1.NotFoundException('companyHomeFeedDetails not found');
        }
        return companyHomeFeedDetails;
    }
    async updateHomeFeedDFetails(jobVideoFeedId, updateHomeFeedDetails) {
        try {
            const companHomeFeedDetailsId = (0, uuid_1.v4)();
            const updateCompanyDetails = await this.companyService.updateCompanyHomeFeedDetails(companHomeFeedDetailsId, updateHomeFeedDetails);
            return {
                message: "Company Job Post Details  Updated Successfully",
                company: updateCompanyDetails
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Company not found');
            }
            throw error;
        }
    }
};
exports.CompanyHomeFeedDetailsController = CompanyHomeFeedDetailsController;
__decorate([
    (0, common_1.Post)('createCompanyHomeFeedDetails'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_home_feed_details_dto_1.CompanyHomeFeedDetailsDTO]),
    __metadata("design:returntype", Promise)
], CompanyHomeFeedDetailsController.prototype, "createCompanyHomeFeedDetails", null);
__decorate([
    (0, common_1.Get)('getCompanyHomeFeedDetails/:companyHomeFeedDetailsId'),
    __param(0, (0, common_1.Param)('companyHomeFeedDetailsId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyHomeFeedDetailsController.prototype, "getCompanyHomeFeedDetails", null);
__decorate([
    (0, common_1.Put)('updateCompanyJobPost/:id'),
    __param(0, (0, common_1.Param)('jobVideoFeedId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompanyHomeFeedDetailsController.prototype, "updateHomeFeedDFetails", null);
exports.CompanyHomeFeedDetailsController = CompanyHomeFeedDetailsController = __decorate([
    (0, common_1.Controller)("Company"),
    (0, swagger_1.ApiTags)('Company Home Feed Details'),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyHomeFeedDetailsController);
//# sourceMappingURL=company.home.feed.details.controller.js.map