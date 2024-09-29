/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from "mongoose";
import { CompanyOnBoardingDTO } from "src/dtos/company/company.details.dto";
import { DateTimeService } from "src/services/datetime.service";
import CompanyDetails from "./models/company.details.model";
import { CompanyHomeFeedDetails } from "./models/company.home.feed.details";
import { CompanyJobPostDTO } from "src/dtos/company/company.job.post.dto";
import { CompanyJobPostDetails } from "./models/company.job.post.model";
import { CompanyJobPostVideoFeedDTO } from "src/dtos/company/company.job.post.video.feed.dto";
import { CompanyJobPostVideoFeed } from "./models/company.job.post.video.feed";
import { CompanyHomeFeedDetailsDTO } from "src/dtos/home_feed/company/company.home.feed.details.dto";
export declare class CompanyService {
    private readonly companyModel;
    private readonly companyJobPostModel;
    private readonly companyJobPostVideoFeedModel;
    private readonly companyHomeFeedDetailsModel;
    private readonly dateTimeservie;
    constructor(companyModel: Model<any>, companyJobPostModel: Model<any>, companyJobPostVideoFeedModel: Model<any>, companyHomeFeedDetailsModel: Model<any>, dateTimeservie: DateTimeService);
    companyDetails(companyDetailsDto: CompanyOnBoardingDTO, userid: string): Promise<any>;
    createCompanyJobPost(companyJobPostDto: CompanyJobPostDTO, userId: string): Promise<any>;
    createCompanyJobPostVideoFeed(companyJobPostVideoFeedDto: CompanyJobPostVideoFeedDTO, userId: string): Promise<any>;
    createCompanyHomeFeedDetails(companyHomeFeedDetailsDto: CompanyHomeFeedDetailsDTO, companyHomeFeedDetailsId: string): Promise<any>;
    getTokenId(): Promise<string>;
    getCompanyDetails(companyId: string): Promise<CompanyDetails | null>;
    getCompanyJobPost(jobPostId: string): Promise<CompanyJobPostDetails | null>;
    getCompanyJobPostVideoFeed(jobVideoFeedId: string): Promise<CompanyJobPostVideoFeed | null>;
    getCompanyHomeFeedDetails(companyHomeFeedDetailsId: string): Promise<any>;
    updateCompany(companyId: string, updateCompany: Partial<CompanyDetails> | Promise<CompanyDetails> | null): Promise<any>;
    updateCompanyJobPost(jobPostId: string, updateCompanyJobPost: Partial<CompanyJobPostDetails> | Promise<CompanyJobPostDetails | null>): Promise<any>;
    updateCompanyJobPostVideoFeed(jobVideoFeedId: string, updateCompanyJobPostVideoFeed: Partial<CompanyJobPostVideoFeed> | Promise<CompanyJobPostVideoFeed | null>): Promise<any>;
    updateCompanyHomeFeedDetails(companyHomeFeedDetailsId: string, updateCompanyHomeFeedDetails: Partial<CompanyHomeFeedDetails> | Promise<CompanyHomeFeedDetails | null>): Promise<any>;
    deleteCompanyJobPost(id: string): Promise<CompanyJobPostDetails>;
    deletedCompanyJobPostVideoFeed(id: string): Promise<CompanyJobPostVideoFeed>;
    getJobPostByJobPostID(id: string): Promise<CompanyJobPostDetails | null>;
    getJobPostByCompanyId(companyId: string): Promise<CompanyJobPostDetails[]>;
    getAllCompanyJobPostDetails(): Promise<CompanyJobPostDetails[]>;
    getAllCompanyJobPostVideoFeedDetails(): Promise<CompanyJobPostVideoFeed[]>;
    getAllCompanyOnboarding(): Promise<CompanyDetails[]>;
    getAllCompanyHomeFeedDetails(): Promise<CompanyHomeFeedDetails[]>;
}
