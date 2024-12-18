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
exports.BookmarkService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bookmark_schema_1 = require("../../schemas/bookmark/bookmark.schema");
const candidate_service_1 = require("../candidate/candidate.service");
const upload_candidate_service_1 = require("../upload.candidate.section/upload.resume/upload.candidate.service");
const upload_video_service_1 = require("../upload.candidate.section/upload.video/upload.video.service");
const company_service_1 = require("../company/company.service");
const uuid_1 = require("uuid");
let BookmarkService = class BookmarkService {
    constructor(bookmarkModel, candidateService, uploadCandidateServie, uploadVideoService, companyService) {
        this.bookmarkModel = bookmarkModel;
        this.candidateService = candidateService;
        this.uploadCandidateServie = uploadCandidateServie;
        this.uploadVideoService = uploadVideoService;
        this.companyService = companyService;
    }
    async bookmark(bookmarkCollectionDto, bookmarkId) {
        const bookmarkDetails = new this.bookmarkModel(bookmarkCollectionDto);
        bookmarkDetails.bookmarkId = bookmarkId;
        if (Array.isArray(bookmarkDetails.bookmarkInfo)) {
            bookmarkDetails.bookmarkInfo.forEach((info) => {
                info.bookmarkCollectionId = bookmarkId;
            });
        }
        if (Array.isArray(bookmarkDetails.bookmarkInfo)) {
            bookmarkDetails.bookmarkInfo.forEach((info) => {
                info.bookmarkInfoId = (0, uuid_1.v4)();
            });
        }
        const saveBookmarkDetails = await bookmarkDetails.save();
        return saveBookmarkDetails;
    }
    async addBookmarkInfo(bookmarkInfoDto) {
        const { bookmarkCollectionId, type, referenceId, candidateId, companyId } = bookmarkInfoDto;
        const bookmarkId = bookmarkCollectionId;
        const bookmarkCollection = await this.bookmarkModel.findOne({ bookmarkId });
        if (!bookmarkCollection) {
            throw new common_1.NotFoundException("No Collection found with the given bookmarkcollectionId " + ": " + bookmarkCollectionId);
        }
        const newBookmarkInfo = {
            bookmarkInfoId: (0, uuid_1.v4)(),
            type,
            bookmarkCollectionId,
            referenceId,
            candidateId,
            companyId,
        };
        bookmarkCollection.bookmarkInfo.push(newBookmarkInfo);
        await bookmarkCollection.save();
        return newBookmarkInfo;
    }
    async editbookmarkCollectionName(title, bookmarkId) {
        const collection = await this.bookmarkModel.findOne({ bookmarkId }).exec();
        if (!collection) {
            throw new common_1.NotFoundException(`Collection with bookmarkId:${bookmarkId} not found`);
        }
        const bookmarkCollection = await this.bookmarkModel.find;
    }
    async deleteBookmarkCollection(bookmarkId) {
        const collection = await this.bookmarkModel.findOne({ bookmarkId }).exec();
        if (!collection) {
            throw new common_1.NotFoundException(`Collection with bookmarkId:${bookmarkId} not found`);
        }
        const bookmarkCollection = await this.bookmarkModel.findOneAndDelete({ bookmarkId }).exec();
        return bookmarkCollection;
    }
    async getAllBookmarkDetail() {
        const allBookmarkDetails = await this.bookmarkModel.find();
        return allBookmarkDetails;
    }
    async getBookmarkDetailByUserId(userId) {
        const bookmarkDetails = await this.bookmarkModel.find({ userId });
        return bookmarkDetails;
    }
    async getBookmarkDetails(userId, nextToken) {
        const bookmarkDetails = await this.getBookmarkDetailByUserId(userId);
        const candidateOnboarding = await this.candidateService.getAllCandidateDetails();
        const uploadCandidateAbout = await this.uploadCandidateServie.getAllCandidateAbout();
        const uploadCandidateEmployment = await this.uploadCandidateServie.getAllCandidateEmployment();
        const uploadCandidateEducation = await this.uploadCandidateServie.getAllCandidateEducation();
        const uploadCandidateProject = await this.uploadCandidateServie.getAllCandidateProject();
        const uploadCandidateVideoDetails = await this.uploadVideoService.getAllCandidateVideo();
        const companyOnboarding = await this.companyService.getAllCompanyOnboarding();
        const jobPost = await this.companyService.getAllCompanyJobPostDetails();
        const companyHomeFeedDetails = await this.companyService.getAllCompanyHomeFeedDetails();
        const companyJobPostVideoFeed = await this.companyService.getAllCompanyJobPostVideoFeedDetails();
        const bookmarkCollectionItemResponse = {
            items: bookmarkDetails.map((bookmarkDetail) => ({
                bookmarkId: bookmarkDetail.bookmarkId,
                userId: bookmarkDetail.userId,
                title: bookmarkDetail.title,
                isDeleted: bookmarkDetail.isDeleted,
                bookmarkInfo: bookmarkDetail.bookmarkInfo.map((bookmarkInfo) => ({
                    bookmarkInfoId: bookmarkInfo.bookmarkInfoId ?? '',
                    type: bookmarkInfo.type ?? '',
                    bookmarkCollectionId: bookmarkInfo.bookmarkCollectionId ?? '',
                    referenceId: bookmarkInfo.referenceId ?? '',
                    candidateOnboarding: candidateOnboarding.find((candidate) => candidate.candidateId == bookmarkInfo.candidateId) ?? null,
                    candidateVideoFeed: uploadCandidateVideoDetails.find((videoFeed) => videoFeed.candidateId == bookmarkInfo.candidateId) ?? null,
                    aboutCandidate: uploadCandidateAbout.find((aboutCandidate) => aboutCandidate.candidateId == bookmarkInfo.candidateId) ?? null,
                    candidateEducation: uploadCandidateEducation.filter(education => education.candidateId == bookmarkInfo.candidateId) || [],
                    candidateEmployment: uploadCandidateEmployment.filter(employment => employment.candidateId == bookmarkInfo.candidateId) || [],
                    candidateProject: uploadCandidateProject.filter(project => project.candidateId == bookmarkInfo.candidateId) || [],
                    candidateHomeFeedDetails: null,
                    companyOnboarding: companyOnboarding.find((compapany) => compapany.companyId == bookmarkInfo.companyId) ?? null,
                    jobPosting: jobPost.find((jobPost) => jobPost.companyId == bookmarkInfo.companyId) ?? null,
                    companyHomeFeedDetails: companyHomeFeedDetails.find((feedDetails) => feedDetails.companyId == bookmarkInfo.companyId) ?? null,
                    companyJobPostVideoFeed: companyJobPostVideoFeed.find((jonPostVideoFeed) => jonPostVideoFeed.companyId == bookmarkInfo.companyId) ?? null
                }))
            })),
            nextToken: nextToken,
        };
        return bookmarkCollectionItemResponse;
    }
};
exports.BookmarkService = BookmarkService;
exports.BookmarkService = BookmarkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(bookmark_schema_1.Bookmark.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        candidate_service_1.CandidateService,
        upload_candidate_service_1.UploadCandidateService,
        upload_video_service_1.UploadVideService,
        company_service_1.CompanyService])
], BookmarkService);
//# sourceMappingURL=bookmark.service.js.map