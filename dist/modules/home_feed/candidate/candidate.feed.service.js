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
exports.CandidateFeedService = void 0;
const common_1 = require("@nestjs/common");
const candidate_service_1 = require("../../candidate/candidate.service");
const upload_candidate_service_1 = require("../../upload.candidate.section/upload.resume/upload.candidate.service");
const upload_video_service_1 = require("../../upload.candidate.section/upload.video/upload.video.service");
let CandidateFeedService = class CandidateFeedService {
    constructor(candidateService, uploadCandidateServie, uploadVideoService) {
        this.candidateService = candidateService;
        this.uploadCandidateServie = uploadCandidateServie;
        this.uploadVideoService = uploadVideoService;
    }
    async getCandidateFeed(nextToken) {
        const candidateOnboarding = await this.candidateService.getAllCandidateDetails();
        const uploadCandidateAbout = await this.uploadCandidateServie.getAllCandidateAbout();
        const uploadCandidateEmployment = await this.uploadCandidateServie.getAllCandidateEmployment();
        const uploadCandidateEducation = await this.uploadCandidateServie.getAllCandidateEducation();
        const uploadCandidateProject = await this.uploadCandidateServie.getAllCandidateProject();
        const uploadCandidateVideoDetails = await this.uploadVideoService.getAllCandidateVideo();
        const candidateFeedResponse = {
            items: uploadCandidateVideoDetails.map((candidateVideo) => ({
                candidateVideoFeedId: candidateVideo.candidateVideoFeedId || '',
                candidateId: candidateVideo.candidateId,
                description: candidateVideo.description,
                thumbnailUrl: candidateVideo.thumbnailUrl ?? '',
                thumbnailWidth: candidateVideo.thumbnailWidth ?? '',
                thumbnailHeight: candidateVideo.thumbnailHeight ?? '',
                playbackId: candidateVideo.playbackId ?? '',
                assetId: candidateVideo.assetId ?? '',
                uploadId: candidateVideo.uploadId ?? '',
                tag: candidateVideo.tag ?? [],
                category: candidateVideo.category ?? [],
                candidateOnBoarding: candidateOnboarding.find((candidate) => candidate.candidateId == candidateVideo.candidateId),
                aboutCandidate: uploadCandidateAbout.find((about) => about.candidateId == candidateVideo.candidateId),
                candidateEmployment: uploadCandidateEmployment.filter(employment => employment.candidateId === candidateVideo.candidateId) || [],
                candidateEducation: uploadCandidateEducation.filter(education => education.candidateId == candidateVideo.candidateId) || [],
                candidateProject: uploadCandidateProject.filter(project => project.candidateId == candidateVideo.candidateId) || [],
            })),
            nextToken: nextToken
        };
        return candidateFeedResponse;
    }
};
exports.CandidateFeedService = CandidateFeedService;
exports.CandidateFeedService = CandidateFeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [candidate_service_1.CandidateService,
        upload_candidate_service_1.UploadCandidateService,
        upload_video_service_1.UploadVideService])
], CandidateFeedService);
//# sourceMappingURL=candidate.feed.service.js.map