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
exports.CandidateLikeController = void 0;
const swagger_1 = require("@nestjs/swagger");
const candidate_following_dto_1 = require("../../dtos/home_feed/candidate/candidate.following.dto");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const ID_request_dto_1 = require("../../dtos/home_feed/candidate/ID.request.dto");
const candidate_following_servce_1 = require("../home-feed.following/candidate.following.servce");
let CandidateLikeController = class CandidateLikeController {
    constructor(candidateFollowingService) {
        this.candidateFollowingService = candidateFollowingService;
    }
    async createCandidateFollowing(candidateFollowingDTO) {
        const createCandidateFolowing = await this.candidateFollowingService.createCandidateFollowing(candidateFollowingDTO);
        if (createCandidateFolowing.id == "" || createCandidateFolowing.id == null) {
            createCandidateFolowing.id = (0, uuid_1.v4)();
        }
        return {
            id: createCandidateFolowing.id
        };
    }
    async deleteCandidateFollowing(idrequestDto) {
        const deleteCandidateFollowing = await this.candidateFollowingService.deleteCandidateFollowing(idrequestDto.id);
        return {
            id: deleteCandidateFollowing.id,
            message: "You have sucessfully Unfollowed"
        };
    }
    async deleteMultipleCandidateFollowing(idrequestDto) {
        const deleteCandidateFollowing = await this.candidateFollowingService.deleteMultipleCandidateFollowing("id");
        return {
            id: deleteCandidateFollowing.id
        };
    }
    async createMultipleandidateFollowing(candidateFollowingDTO) {
        return {
            status: common_1.HttpStatus.OK,
            message: 'Follows successfully created',
            data: candidateFollowingDTO
        };
    }
};
exports.CandidateLikeController = CandidateLikeController;
__decorate([
    (0, common_1.Post)("createCandidateLike"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [candidate_following_dto_1.CandidateFollowingDTO]),
    __metadata("design:returntype", Promise)
], CandidateLikeController.prototype, "createCandidateFollowing", null);
__decorate([
    (0, common_1.Post)("deleteCandidateLike"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ID_request_dto_1.IDRequestDTO]),
    __metadata("design:returntype", Promise)
], CandidateLikeController.prototype, "deleteCandidateFollowing", null);
__decorate([
    (0, common_1.Post)("deleteMultipleCandidateLike"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CandidateLikeController.prototype, "deleteMultipleCandidateFollowing", null);
__decorate([
    (0, common_1.Post)("createMultipleCandidateLike"),
    (0, swagger_1.ApiBody)({ description: "List of follows to create", type: [candidate_following_dto_1.CandidateFollowingDTO] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CandidateLikeController.prototype, "createMultipleandidateFollowing", null);
exports.CandidateLikeController = CandidateLikeController = __decorate([
    (0, common_1.Controller)('Like'),
    (0, swagger_1.ApiTags)("Candidate-Like"),
    __metadata("design:paramtypes", [candidate_following_servce_1.CandidateFollowingService])
], CandidateLikeController);
//# sourceMappingURL=homefeed.like.controller.js.map