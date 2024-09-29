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
exports.CandidateHomeFeedController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const uuid_1 = require("uuid");
const candidate_home_feed_service_1 = require("./candidate.home.feed.service");
let CandidateHomeFeedController = class CandidateHomeFeedController {
    constructor(candidateHomeFeedService) {
        this.candidateHomeFeedService = candidateHomeFeedService;
    }
    async getNextToken(nextToken) {
        if (nextToken) {
            return nextToken;
        }
        else {
            const nextTokenID = (0, uuid_1.v4)();
            return nextTokenID;
        }
    }
    async getHomeFeed(nextToken) {
        const nextTokenId = await this.getNextToken(nextToken);
        const companyJobPostFeedResponse = this.candidateHomeFeedService.getHomeFeed(nextTokenId);
        return companyJobPostFeedResponse;
    }
    async fetchAllByCompany(companyId, nextToken) {
        const companyJobFeedResponseByCompanyID = this.candidateHomeFeedService.getHomeFeedByCompanyID(companyId, nextToken);
        return companyJobFeedResponseByCompanyID;
    }
    async fetchAllPaginatedByCompany(companyId, nextToken) {
        const companyJobFeedResponsePaginatedByCompanyID = this.candidateHomeFeedService.getPaginatedByCompanyID(companyId, nextToken);
        return companyJobFeedResponsePaginatedByCompanyID;
    }
};
exports.CandidateHomeFeedController = CandidateHomeFeedController;
__decorate([
    (0, common_1.Get)('fetchCompanyHomeFeed'),
    (0, swagger_1.ApiQuery)({ name: 'nextToken', required: false }),
    __param(0, (0, common_1.Query)('nextToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidateHomeFeedController.prototype, "getHomeFeed", null);
__decorate([
    (0, common_1.Get)('fetchAllByCompanyID'),
    (0, swagger_1.ApiQuery)({ name: 'nextToken', required: false }),
    __param(0, (0, common_1.Query)('companyId')),
    __param(1, (0, common_1.Query)('nextToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CandidateHomeFeedController.prototype, "fetchAllByCompany", null);
__decorate([
    (0, common_1.Get)('fetchAllPaginatedByCompanyId'),
    (0, swagger_1.ApiQuery)({ name: 'nextToken', required: false }),
    __param(0, (0, common_1.Query)('companyId')),
    __param(1, (0, common_1.Query)('nextToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CandidateHomeFeedController.prototype, "fetchAllPaginatedByCompany", null);
exports.CandidateHomeFeedController = CandidateHomeFeedController = __decorate([
    (0, common_1.Controller)('HomeFeed'),
    (0, swagger_1.ApiTags)('Home-Feed'),
    __metadata("design:paramtypes", [candidate_home_feed_service_1.CandidateHomeFeedService])
], CandidateHomeFeedController);
//# sourceMappingURL=candidate.home.feed.controller.js.map