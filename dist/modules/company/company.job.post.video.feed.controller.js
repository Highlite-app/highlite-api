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
exports.CompanyJobPostVideoFeedController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const jwt_service_1 = require("../JwtModule/jwt.service");
const company_service_1 = require("./company.service");
const company_job_post_video_feed_dto_1 = require("../../dtos/company/company.job.post.video.feed.dto");
let CompanyJobPostVideoFeedController = class CompanyJobPostVideoFeedController {
    constructor(jwtServices, companyService) {
        this.jwtServices = jwtServices;
        this.companyService = companyService;
    }
    async createCompanyProfile(companyJobPostVideoFeedDto) {
        const jobPostVideoFeedID = (0, uuid_1.v4)();
        this.companyService.createCompanyJobPostVideoFeed(companyJobPostVideoFeedDto, jobPostVideoFeedID);
        try {
            return {
                id: jobPostVideoFeedID
            };
        }
        catch (error) {
            throw new common_1.NotAcceptableException();
        }
    }
    async getCompanyJobPostProfile(jobVideoFeedId) {
        console.log("The userid for CompanyProfileDetails is :: " + jobVideoFeedId);
        const companyVideoFeedDetails = await this.companyService.getCompanyJobPostVideoFeed(jobVideoFeedId);
        if (!companyVideoFeedDetails) {
            throw new common_1.NotFoundException("Company Details not ");
        }
        return companyVideoFeedDetails;
    }
    async updateCompanyJobPostDetails(userId, updateCompanyJobPost) {
        try {
            const updateCompanyJobPostVideoFeedDetails = await this.companyService.updateCompanyJobPostVideoFeed(userId, updateCompanyJobPost);
            return {
                message: "Company Job Post Details  Updated Successfully",
                company: updateCompanyJobPostVideoFeedDetails
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Company not found');
            }
            throw error;
        }
    }
    async deleteCompanyJobPostVideoFeed(postId) {
        try {
            const deleteCompanyJobPostVideoFeed = await this.companyService.deletedCompanyJobPostVideoFeed(postId);
            return {
                message: 'Company Job Post Details Deleted Successfully',
                company: deleteCompanyJobPostVideoFeed,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Company job post not found');
            }
            throw error;
        }
    }
};
exports.CompanyJobPostVideoFeedController = CompanyJobPostVideoFeedController;
__decorate([
    (0, common_1.Post)('createCompanyJobPostVideoFeed'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_job_post_video_feed_dto_1.CompanyJobPostVideoFeedDTO]),
    __metadata("design:returntype", Promise)
], CompanyJobPostVideoFeedController.prototype, "createCompanyProfile", null);
__decorate([
    (0, common_1.Get)('getCompanyJobPostVideoFeed/:jobVideoFeedId'),
    __param(0, (0, common_1.Param)('jobVideoFeedId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyJobPostVideoFeedController.prototype, "getCompanyJobPostProfile", null);
__decorate([
    (0, common_1.Put)('updateCompanyJobPostVideFeed/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompanyJobPostVideoFeedController.prototype, "updateCompanyJobPostDetails", null);
__decorate([
    (0, common_1.Delete)('deleteCompanyJobPostVideoFeed/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyJobPostVideoFeedController.prototype, "deleteCompanyJobPostVideoFeed", null);
exports.CompanyJobPostVideoFeedController = CompanyJobPostVideoFeedController = __decorate([
    (0, common_1.Controller)('Company'),
    (0, swagger_1.ApiTags)('Job-Post-Video-Feed-Company'),
    __metadata("design:paramtypes", [jwt_service_1.JwtServices,
        company_service_1.CompanyService])
], CompanyJobPostVideoFeedController);
//# sourceMappingURL=company.job.post.video.feed.controller.js.map