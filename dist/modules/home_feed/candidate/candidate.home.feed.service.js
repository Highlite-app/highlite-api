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
exports.CandidateHomeFeedService = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("../../company/company.service");
let CandidateHomeFeedService = class CandidateHomeFeedService {
    constructor(companyService) {
        this.companyService = companyService;
    }
    async getHomeFeed(nextToken) {
        const companyJobPostDetails = await this.companyService.getAllCompanyJobPostDetails();
        const companyJobPosVideoFeedDetails = await this.companyService.getAllCompanyJobPostVideoFeedDetails();
        const companyOnboarding = await this.companyService.getAllCompanyOnboarding();
        const companyHomeFeedDetails = await this.companyService.getAllCompanyHomeFeedDetails();
        const homeFeedResponse = {
            items: companyJobPosVideoFeedDetails.map((jobPostVideoFed) => ({
                jobVideoFeedId: jobPostVideoFed.jobVideoFeedId,
                playbackId: jobPostVideoFed.playbackId,
                thumbnailWidth: jobPostVideoFed.thumbnailWidth,
                thumbnailHeight: jobPostVideoFed.thumbnailHeight,
                assetId: jobPostVideoFed.assetId,
                uploadId: jobPostVideoFed.uploadId,
                jobStatus: jobPostVideoFed.jobStatus,
                companyId: jobPostVideoFed.companyId,
                companyOnboarding: companyOnboarding.find((companyOnboarding) => companyOnboarding.companyId == jobPostVideoFed.companyId),
                companyJobPost: companyJobPostDetails.find((jobPost) => jobPost.companyId == jobPostVideoFed.companyId),
                companyHomeFeedDetails: companyHomeFeedDetails.find((homefeedDetails) => homefeedDetails.companyId == jobPostVideoFed.companyId),
            })),
            nextToken,
        };
        return homeFeedResponse;
    }
    async getHomeFeedByCompanyID(companyID, nextToken) {
        const companyJobPostDetails = await this.companyService.getAllCompanyJobPostDetails();
        const companyJobPosVideoFeedDetails = (await this.companyService.getAllCompanyJobPostVideoFeedDetails()).filter(jobPostVideFeed => jobPostVideFeed.companyId == companyID);
        const companyOnboarding = (await this.companyService.getAllCompanyOnboarding());
        const companyHomeFeedDetails = await this.companyService.getAllCompanyHomeFeedDetails();
        const homeFeedResponse = {
            items: companyJobPosVideoFeedDetails.map((jobPostVideoFed) => ({
                jobVideoFeedId: jobPostVideoFed.jobVideoFeedId,
                playbackId: jobPostVideoFed.playbackId,
                thumbnailHeight: jobPostVideoFed.thumbnailHeight,
                thumbnailWidth: jobPostVideoFed.thumbnailWidth,
                assetId: jobPostVideoFed.assetId,
                uploadId: jobPostVideoFed.uploadId,
                jobStatus: jobPostVideoFed.jobStatus,
                companyId: jobPostVideoFed.companyId,
                companyOnboarding: companyOnboarding.find((companyOnboarding) => companyOnboarding.companyId == companyID),
                companyJobPost: companyJobPostDetails.find((jobPost) => jobPost.companyId == companyID),
                companyHomeFeedDetails: companyHomeFeedDetails.find((homefeedDetails) => homefeedDetails.companyId == companyID),
            })),
            nextToken,
        };
        return homeFeedResponse;
    }
    async getPaginatedByCompanyID(companyID, nextToken) {
        const companyOnboarding = await this.companyService.getAllCompanyOnboarding();
        const companyJobPosDetails = await this.companyService.getAllCompanyJobPostDetails();
        const filteredCompanyPostVideoFeedDetails = (await this.companyService.getAllCompanyJobPostVideoFeedDetails()).filter(jobPostVideoFeed => jobPostVideoFeed.companyId == companyID);
        const companyHomeFeedDetails = await this.companyService.getAllCompanyHomeFeedDetails();
        const page = 1;
        const pageSize = 10;
        const startIndex = (page - 1) * pageSize;
        const paginatedCompanyJobPostVideoFeed = filteredCompanyPostVideoFeedDetails.slice(startIndex, startIndex + pageSize);
        const paginatedResponse = {
            items: paginatedCompanyJobPostVideoFeed.map((jobPostVideoFeed) => ({
                jobVideoFeedId: jobPostVideoFeed.jobVideoFeedId,
                playbackId: jobPostVideoFeed.playbackId,
                thumbnailHeight: jobPostVideoFeed.thumbnailHeight,
                thumbnailWidth: jobPostVideoFeed.thumbnailWidth,
                assetId: jobPostVideoFeed.assetId,
                uploadId: jobPostVideoFeed.uploadId,
                jobStatus: jobPostVideoFeed.jobStatus,
                companyId: jobPostVideoFeed.companyId,
                companyOnboarding: companyOnboarding.find((companyOnboarding) => companyOnboarding.companyId == companyID),
                companyJobPost: companyJobPosDetails.find((jobPost) => jobPost.companyId == companyID),
                companyHomeFeedDetails: companyHomeFeedDetails.find((homefeedDetails) => homefeedDetails.companyId == companyID),
            })),
            nextToken,
        };
        return paginatedResponse;
    }
};
exports.CandidateHomeFeedService = CandidateHomeFeedService;
exports.CandidateHomeFeedService = CandidateHomeFeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CandidateHomeFeedService);
//# sourceMappingURL=candidate.home.feed.service.js.map