"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const company_details_model_1 = __importStar(require("./models/company.details.model"));
const company_controller_1 = require("./company_controller");
const company_service_1 = require("./company.service");
const datetime_service_1 = require("../../services/datetime.service");
const company_job_post_controller_1 = require("./company.job.post.controller");
const company_job_post_model_1 = require("./models/company.job.post.model");
const company_job_post_video_feed_1 = require("./models/company.job.post.video.feed");
const company_job_post_video_feed_controller_1 = require("./company.job.post.video.feed.controller");
const candidate_home_feed_controller_1 = require("../home_feed/candidate/candidate.home.feed.controller");
const candidate_home_feed_service_1 = require("../home_feed/candidate/candidate.home.feed.service");
const candidate_following_controller_1 = require("../home-feed.following/candidate.following.controller");
const candidate_following_servce_1 = require("../home-feed.following/candidate.following.servce");
const candidate_module_1 = require("../candidate/candidate.module");
const homefeed_like_controller_1 = require("../homefeed.like/homefeed.like.controller");
const company_home_feed_details_controller_1 = require("./company.home.feed.details.controller");
const auth_module_1 = require("../JwtModule/auth.module");
const company_home_feed_details_1 = require("./models/company.home.feed.details");
let CompanyModule = class CompanyModule {
};
exports.CompanyModule = CompanyModule;
exports.CompanyModule = CompanyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: company_details_model_1.default.name, schema: company_details_model_1.CompanyDetailsSchemas }]),
            mongoose_1.MongooseModule.forFeature([{ name: company_job_post_model_1.CompanyJobPostDetails.name, schema: company_job_post_model_1.CompanyJobPostDetailsSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: company_job_post_video_feed_1.CompanyJobPostVideoFeed.name, schema: company_job_post_video_feed_1.CompanyJobPostVideFeedSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: company_home_feed_details_1.CompanyHomeFeedDetails.name, schema: company_home_feed_details_1.CompamnyHomeFeedDetailsSchema }]),
            auth_module_1.JWTModule,
            candidate_module_1.CandidateModule
        ],
        controllers: [company_controller_1.CompanyDetailsController, company_home_feed_details_controller_1.CompanyHomeFeedDetailsController, company_job_post_controller_1.CompanyJobPostController, company_job_post_video_feed_controller_1.CompanyJobPostVideoFeedController, candidate_home_feed_controller_1.CandidateHomeFeedController, candidate_following_controller_1.CandidateFollowingController, homefeed_like_controller_1.CandidateLikeController],
        providers: [company_service_1.CompanyService, datetime_service_1.DateTimeService, candidate_following_servce_1.CandidateFollowingService, candidate_home_feed_service_1.CandidateHomeFeedService],
        exports: [company_service_1.CompanyService,
            datetime_service_1.DateTimeService,
            candidate_following_servce_1.CandidateFollowingService,
            candidate_home_feed_service_1.CandidateHomeFeedService,
            mongoose_1.MongooseModule,],
    })
], CompanyModule);
//# sourceMappingURL=company.module.js.map