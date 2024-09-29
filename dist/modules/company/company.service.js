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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const datetime_service_1 = require("../../services/datetime.service");
const company_details_model_1 = __importDefault(require("./models/company.details.model"));
const company_home_feed_details_1 = require("./models/company.home.feed.details");
const company_job_post_model_1 = require("./models/company.job.post.model");
const company_job_post_video_feed_1 = require("./models/company.job.post.video.feed");
let CompanyService = class CompanyService {
    constructor(companyModel, companyJobPostModel, companyJobPostVideoFeedModel, companyHomeFeedDetailsModel, dateTimeservie) {
        this.companyModel = companyModel;
        this.companyJobPostModel = companyJobPostModel;
        this.companyJobPostVideoFeedModel = companyJobPostVideoFeedModel;
        this.companyHomeFeedDetailsModel = companyHomeFeedDetailsModel;
        this.dateTimeservie = dateTimeservie;
    }
    async companyDetails(companyDetailsDto, userid) {
        const companyDetails = new this.companyModel(companyDetailsDto);
        companyDetails.companyId = userid;
        const savedUser = await companyDetails.save();
        return savedUser;
    }
    async createCompanyJobPost(companyJobPostDto, userId) {
        const companyJobPostDetails = new this.companyJobPostModel(companyJobPostDto);
        companyJobPostDetails.jobPostId = userId;
        const savedJobPost = await companyJobPostDetails.save();
        return savedJobPost;
    }
    async createCompanyJobPostVideoFeed(companyJobPostVideoFeedDto, userId) {
        const companyJobPostVideoFeed = new this.companyJobPostVideoFeedModel(companyJobPostVideoFeedDto);
        companyJobPostVideoFeed.jobVideoFeedId = userId;
        const savedJobPostVideoFeed = await companyJobPostVideoFeed.save();
        return savedJobPostVideoFeed;
    }
    async createCompanyHomeFeedDetails(companyHomeFeedDetailsDto, companyHomeFeedDetailsId) {
        const companyHomeFeedDetails = new this.companyHomeFeedDetailsModel(companyHomeFeedDetailsDto);
        companyHomeFeedDetails.companyHomeFeedDetailsId = companyHomeFeedDetailsId;
        const savedCompanyHomeFeedDetails = await companyHomeFeedDetails.save();
        return savedCompanyHomeFeedDetails;
    }
    async getTokenId() {
        const currentDateTime = this.dateTimeservie.getCurrentDateTime();
        console.log(`*******${currentDateTime}*******`);
        return currentDateTime;
    }
    async getCompanyDetails(companyId) {
        return this.companyModel.findOne({ companyId }).exec();
    }
    async getCompanyJobPost(jobPostId) {
        return this.companyJobPostModel.findOne({ jobPostId }).exec();
    }
    async getCompanyJobPostVideoFeed(jobVideoFeedId) {
        return this.companyJobPostVideoFeedModel.findOne({ jobVideoFeedId }).exec();
    }
    async getCompanyHomeFeedDetails(companyHomeFeedDetailsId) {
        return this.companyHomeFeedDetailsModel.findOne({ companyHomeFeedDetailsId }).exec();
    }
    async updateCompany(companyId, updateCompany) {
        const company = await this.companyModel.findOne({ companyId }).exec();
        if (!company) {
            throw new common_1.NotFoundException("Company Not Found");
        }
        Object.assign(company, updateCompany);
        await company.save();
        return company;
    }
    async updateCompanyJobPost(jobPostId, updateCompanyJobPost) {
        const companyJobPostDetails = await this.companyJobPostModel.findOne({ jobPostId }).exec();
        if (!companyJobPostDetails) {
            throw new common_1.NotFoundException("Company Job not Found");
        }
        Object.assign(companyJobPostDetails, updateCompanyJobPost);
        await companyJobPostDetails.save();
        return companyJobPostDetails;
    }
    async updateCompanyJobPostVideoFeed(jobVideoFeedId, updateCompanyJobPostVideoFeed) {
        const companyJobPostVideFeedDetails = await this.companyJobPostVideoFeedModel.findOne({ jobVideoFeedId }).exec();
        if (!companyJobPostVideFeedDetails) {
            throw new common_1.NotFoundException("Not Feeds available for Update in this Company");
        }
        Object.assign(companyJobPostVideFeedDetails, updateCompanyJobPostVideoFeed);
        await companyJobPostVideFeedDetails.save();
        return companyJobPostVideFeedDetails;
    }
    async updateCompanyHomeFeedDetails(companyHomeFeedDetailsId, updateCompanyHomeFeedDetails) {
        const companyHomeFeedDetails = await this.companyHomeFeedDetailsModel.findOne({ companyHomeFeedDetailsId }).exec();
        if (!companyHomeFeedDetails) {
            throw new common_1.NotFoundException("Not Feeds available for Update in this Company");
        }
        Object.assign(companyHomeFeedDetails, updateCompanyHomeFeedDetails);
        await companyHomeFeedDetails.save();
        return companyHomeFeedDetails;
    }
    async deleteCompanyJobPost(id) {
        const deleteCompanyJobPost = await this.companyJobPostModel.findOneAndDelete({ jobId: id });
        if (!deleteCompanyJobPost) {
            throw new common_1.NotFoundException('Company job post not found');
        }
        return deleteCompanyJobPost;
    }
    async deletedCompanyJobPostVideoFeed(id) {
        const deleteCompanyJobPostVideoFeed = await this.companyJobPostVideoFeedModel.findOneAndDelete({ id }).exec();
        if (!deleteCompanyJobPostVideoFeed) {
            throw new common_1.NotFoundException("Company Job Video Feed not found");
        }
        return deleteCompanyJobPostVideoFeed;
    }
    async getJobPostByJobPostID(id) {
        const companyJobPostDetails = await this.companyJobPostModel.findOne({ id }).exec();
        return companyJobPostDetails;
    }
    async getJobPostByCompanyId(companyId) {
        return await this.companyJobPostModel.find({ companyId }).exec();
    }
    async getAllCompanyJobPostDetails() {
        const companyJobPosteDetails = this.companyJobPostModel.find().exec();
        return companyJobPosteDetails;
    }
    async getAllCompanyJobPostVideoFeedDetails() {
        const companyJobPostVideoFeedDetails = this.companyJobPostVideoFeedModel.find().exec();
        return companyJobPostVideoFeedDetails;
    }
    async getAllCompanyOnboarding() {
        const companyOnboarding = this.companyModel.find().exec();
        return companyOnboarding;
    }
    async getAllCompanyHomeFeedDetails() {
        const homeFeedDetails = this.companyHomeFeedDetailsModel.find().exec();
        return homeFeedDetails;
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(company_details_model_1.default.name)),
    __param(1, (0, mongoose_1.InjectModel)(company_job_post_model_1.CompanyJobPostDetails.name)),
    __param(2, (0, mongoose_1.InjectModel)(company_job_post_video_feed_1.CompanyJobPostVideoFeed.name)),
    __param(3, (0, mongoose_1.InjectModel)(company_home_feed_details_1.CompanyHomeFeedDetails.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        datetime_service_1.DateTimeService])
], CompanyService);
//# sourceMappingURL=company.service.js.map