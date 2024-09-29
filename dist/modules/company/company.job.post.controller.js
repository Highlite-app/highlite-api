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
exports.CompanyJobPostController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const jwt_service_1 = require("../JwtModule/jwt.service");
const company_service_1 = require("./company.service");
const company_job_post_dto_1 = require("../../dtos/company/company.job.post.dto");
let CompanyJobPostController = class CompanyJobPostController {
    constructor(jwtServices, companyService) {
        this.jwtServices = jwtServices;
        this.companyService = companyService;
    }
    async createCompanyProfile(companyJobPostDto) {
        const jobPostID = (0, uuid_1.v4)();
        this.companyService.createCompanyJobPost(companyJobPostDto, jobPostID);
        try {
            return {
                id: jobPostID
            };
        }
        catch (error) {
            throw new common_1.NotAcceptableException();
        }
    }
    async getCompanyJobPostProfile(jobPostId) {
        console.log("The userid for CompanyProfileDetails is :: " + jobPostId);
        const companyProfileDetails = await this.companyService.getCompanyJobPost(jobPostId);
        if (!companyProfileDetails) {
            throw new common_1.NotFoundException("Company Details not ");
        }
        return companyProfileDetails;
    }
    async updateCompanyJobPostDetails(userId, updateCompanyJobPost) {
        try {
            const updateCompanyDetails = await this.companyService.updateCompanyJobPost(userId, updateCompanyJobPost);
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
    async deleteCompanyJobPost(postId) {
        try {
            const deletedCompanyDetails = await this.companyService.deleteCompanyJobPost(postId);
            return {
                message: 'Company Job Post Details Deleted Successfully',
                company: deletedCompanyDetails,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Company job post not found');
            }
            throw error;
        }
    }
    async getJobPostByCompnayId(companyID) {
        const companyJobPostListById = await this.companyService.getJobPostByCompanyId(companyID);
        if (!companyJobPostListById) {
            throw new common_1.NotFoundException("No Job Post Found with " + companyID);
        }
        else {
            return companyJobPostListById;
        }
    }
};
exports.CompanyJobPostController = CompanyJobPostController;
__decorate([
    (0, common_1.Post)('createCompanyJobPost'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_job_post_dto_1.CompanyJobPostDTO]),
    __metadata("design:returntype", Promise)
], CompanyJobPostController.prototype, "createCompanyProfile", null);
__decorate([
    (0, common_1.Get)('getCompanyJobPost/:jobPostId'),
    __param(0, (0, common_1.Param)('jobPostId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyJobPostController.prototype, "getCompanyJobPostProfile", null);
__decorate([
    (0, common_1.Put)('updateCompanyJobPost/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompanyJobPostController.prototype, "updateCompanyJobPostDetails", null);
__decorate([
    (0, common_1.Delete)('deleteCompanyJobPost/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyJobPostController.prototype, "deleteCompanyJobPost", null);
__decorate([
    (0, common_1.Get)('getJobPostByCompanyID/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyJobPostController.prototype, "getJobPostByCompnayId", null);
exports.CompanyJobPostController = CompanyJobPostController = __decorate([
    (0, common_1.Controller)("Company"),
    (0, swagger_1.ApiTags)('Job-Post-Company'),
    __metadata("design:paramtypes", [jwt_service_1.JwtServices,
        company_service_1.CompanyService])
], CompanyJobPostController);
//# sourceMappingURL=company.job.post.controller.js.map