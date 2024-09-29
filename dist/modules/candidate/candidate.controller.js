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
exports.CandidateDeatilsController = void 0;
const common_1 = require("@nestjs/common");
const candidate_service_1 = require("./candidate.service");
const candidate_onboarding_dto_1 = require("../../dtos/candidate/candidate.onboarding.dto");
const swagger_1 = require("@nestjs/swagger");
const user_type_enum_1 = require("../../enums/user.type.enum");
const jwt_service_1 = require("../JwtModule/jwt.service");
const uuid_1 = require("uuid");
let CandidateDeatilsController = class CandidateDeatilsController {
    constructor(candidateService, jwtServices) {
        this.candidateService = candidateService;
        this.jwtServices = jwtServices;
    }
    async candidateDetails(candidateDto) {
        const userId = (0, uuid_1.v4)();
        const user = { username: candidateDto.firstName + candidateDto.lastName, id: userId };
        const accessToken = await this.jwtServices.generateToken(user);
        const tokenId = await this.candidateService.getTokenId();
        this.candidateService.candidateDetails(candidateDto, userId);
        return {
            "status": true,
            "data": {
                id: userId,
                message: "Data Stored Successfully",
                accessToken: accessToken,
                tokenId: tokenId,
                userType: user_type_enum_1.UserTypeEnum.candidate,
                isLoggedIn: true
            }
        };
    }
    async getCandidateDetails(candidateId) {
        console.log("The user id in getCandidate is ::" + candidateId);
        const candidate = await this.candidateService.getCandidateDetails(candidateId);
        if (!candidate) {
            throw new common_1.NotFoundException("Candidate Cannot Found");
        }
        return candidate;
    }
    ;
    async updateCandidate(candidateId, updateDetails) {
        try {
            const updateCandidate = await this.candidateService.updateCandidate(candidateId, updateDetails);
            return { message: 'Candidate details updated successfully', candidate: updateCandidate };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Candidate not found');
            }
            throw error;
        }
    }
};
exports.CandidateDeatilsController = CandidateDeatilsController;
__decorate([
    (0, common_1.Post)("candidateDetails"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [candidate_onboarding_dto_1.CandidateOnBoardingDto]),
    __metadata("design:returntype", Promise)
], CandidateDeatilsController.prototype, "candidateDetails", null);
__decorate([
    (0, common_1.Get)('getCandidateDetails/:candidateId'),
    __param(0, (0, common_1.Param)('candidateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidateDeatilsController.prototype, "getCandidateDetails", null);
__decorate([
    (0, common_1.Put)('updateCandidate/:candidateId'),
    __param(0, (0, common_1.Param)('candidateId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CandidateDeatilsController.prototype, "updateCandidate", null);
exports.CandidateDeatilsController = CandidateDeatilsController = __decorate([
    (0, common_1.Controller)('Candidate'),
    (0, swagger_1.ApiTags)("OnBoarding-Candidate"),
    __metadata("design:paramtypes", [candidate_service_1.CandidateService,
        jwt_service_1.JwtServices])
], CandidateDeatilsController);
//# sourceMappingURL=candidate.controller.js.map