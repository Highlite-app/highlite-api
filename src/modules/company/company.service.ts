import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { DateTimestamp } from "aws-sdk/clients/bedrockagent";
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

@Injectable()
export class CompanyService {

    constructor(

    
        @InjectModel(CompanyDetails.name) private readonly companyModel: Model<any>,
        @InjectModel(CompanyJobPostDetails.name) private readonly companyJobPostModel: Model<any>,
        @InjectModel(CompanyJobPostVideoFeed.name) private readonly companyJobPostVideoFeedModel: Model<any>,
        @InjectModel(CompanyHomeFeedDetails.name) private readonly companyHomeFeedDetailsModel: Model<any>,

        private readonly dateTimeservie: DateTimeService) { }


    async companyDetails(companyDetailsDto: CompanyOnBoardingDTO, userid: string) {

        const companyDetails = new this.companyModel(companyDetailsDto);
        companyDetails.companyId = userid;
        const savedUser = await companyDetails.save();
        return savedUser;
    }

    async createCompanyJobPost(companyJobPostDto: CompanyJobPostDTO, userId: string) {
        const companyJobPostDetails = new this.companyJobPostModel(companyJobPostDto);
        companyJobPostDetails.jobPostId = userId;
        const savedJobPost = await companyJobPostDetails.save();
        return savedJobPost;
    }

    async createCompanyJobPostVideoFeed(companyJobPostVideoFeedDto: CompanyJobPostVideoFeedDTO, userId: string) {
        const companyJobPostVideoFeed = new this.companyJobPostVideoFeedModel(companyJobPostVideoFeedDto);
        companyJobPostVideoFeed.jobVideoFeedId = userId;
        const savedJobPostVideoFeed = await companyJobPostVideoFeed.save();
        return savedJobPostVideoFeed;
    }

    async  createCompanyHomeFeedDetails(companyHomeFeedDetailsDto : CompanyHomeFeedDetailsDTO , companyHomeFeedDetailsId: string) {

        const companyHomeFeedDetails = new  this.companyHomeFeedDetailsModel(companyHomeFeedDetailsDto) ; 
        companyHomeFeedDetails.companyHomeFeedDetailsId = companyHomeFeedDetailsId ; 
        const savedCompanyHomeFeedDetails = await companyHomeFeedDetails.save() ; 
        return savedCompanyHomeFeedDetails ; 
    }




    

    async getTokenId(): Promise<string> {
        const currentDateTime = this.dateTimeservie.getCurrentDateTime();
        console.log(`*******${currentDateTime}*******`)
        return currentDateTime;
    }


    async getCompanyDetails(companyId: string): Promise<CompanyDetails | null> {
        return this.companyModel.findOne({ companyId }).exec();
    }



    async getCompanyJobPost(jobPostId: string): Promise<CompanyJobPostDetails | null> {
        return this.companyJobPostModel.findOne({ jobPostId }).exec();

    }

    async getCompanyJobPostVideoFeed(jobVideoFeedId: string): Promise<CompanyJobPostVideoFeed | null> {
        return this.companyJobPostVideoFeedModel.findOne({ jobVideoFeedId }).exec();
    }


    async getCompanyHomeFeedDetails(companyHomeFeedDetailsId : string){
        return this.companyHomeFeedDetailsModel.findOne({companyHomeFeedDetailsId}).exec() ; 
  }


    async updateCompany(companyId: string, updateCompany: Partial<CompanyDetails> | Promise<CompanyDetails> | null) {
        const company = await this.companyModel.findOne({ companyId }).exec();

        if (!company) {
            throw new NotFoundException("Company Not Found");
        }

        Object.assign(company, updateCompany);

        await company.save();

        return company;
    }




    async updateCompanyJobPost(jobPostId: string, updateCompanyJobPost: Partial<CompanyJobPostDetails> | Promise<CompanyJobPostDetails | null>) {
        const companyJobPostDetails = await this.companyJobPostModel.findOne({ jobPostId }).exec();

        if (!companyJobPostDetails) {
            throw new NotFoundException("Company Job not Found");
        }

        Object.assign(companyJobPostDetails, updateCompanyJobPost);

        await companyJobPostDetails.save();

        return companyJobPostDetails;

    }

    async updateCompanyJobPostVideoFeed(jobVideoFeedId: string, updateCompanyJobPostVideoFeed: Partial<CompanyJobPostVideoFeed> | Promise<CompanyJobPostVideoFeed | null>) {
        const companyJobPostVideFeedDetails = await this.companyJobPostVideoFeedModel.findOne({ jobVideoFeedId }).exec();

        if (!companyJobPostVideFeedDetails) {
            throw new NotFoundException("Not Feeds available for Update in this Company");
        }

        Object.assign(companyJobPostVideFeedDetails, updateCompanyJobPostVideoFeed);

        await companyJobPostVideFeedDetails.save();

        return companyJobPostVideFeedDetails;

    }


    async updateCompanyHomeFeedDetails(companyHomeFeedDetailsId: string, updateCompanyHomeFeedDetails: Partial<CompanyHomeFeedDetails> | Promise<CompanyHomeFeedDetails | null>) {
        const companyHomeFeedDetails = await this.companyHomeFeedDetailsModel.findOne({ companyHomeFeedDetailsId }).exec();

        if (!companyHomeFeedDetails) {
            throw new NotFoundException("Not Feeds available for Update in this Company");
        }

        Object.assign(companyHomeFeedDetails, updateCompanyHomeFeedDetails);

        await companyHomeFeedDetails.save();

        return companyHomeFeedDetails;

    }


    

    async deleteCompanyJobPost(id: string): Promise<CompanyJobPostDetails> {
        const deleteCompanyJobPost = await this.companyJobPostModel.findOneAndDelete({jobId :  id });
        if (!deleteCompanyJobPost) {
            throw new NotFoundException('Company job post not found');
        }
        return deleteCompanyJobPost;
    }

    async deletedCompanyJobPostVideoFeed(id: string): Promise<CompanyJobPostVideoFeed> {
        const deleteCompanyJobPostVideoFeed = await this.companyJobPostVideoFeedModel.findOneAndDelete({ id }).exec();

        if (!deleteCompanyJobPostVideoFeed) {
            throw new NotFoundException("Company Job Video Feed not found");
        }
        return deleteCompanyJobPostVideoFeed;
    }


    async getJobPostByJobPostID(id:string):Promise<CompanyJobPostDetails| null>{
        const companyJobPostDetails =  await this.companyJobPostModel.findOne({id}).exec() ; 

        return companyJobPostDetails ; 
    }

    async getJobPostByCompanyId(companyId: string): Promise<CompanyJobPostDetails[]> {
        return await this.companyJobPostModel.find({ companyId }).exec();
    }


    async getAllCompanyJobPostDetails(): Promise<CompanyJobPostDetails[]> {

        const companyJobPosteDetails = this.companyJobPostModel.find().exec()

        return companyJobPosteDetails;
    }

    async getAllCompanyJobPostVideoFeedDetails(): Promise<CompanyJobPostVideoFeed[]> {

        const companyJobPostVideoFeedDetails = this.companyJobPostVideoFeedModel.find().exec()

        return companyJobPostVideoFeedDetails;
    }


    async getAllCompanyOnboarding(): Promise<CompanyDetails[]> {

        const companyOnboarding = this.companyModel.find().exec()

        return companyOnboarding;
    }


    async getAllCompanyHomeFeedDetails(): Promise<CompanyHomeFeedDetails[]> {

        const homeFeedDetails = this.companyHomeFeedDetailsModel.find().exec()

        return homeFeedDetails;
    }



    





}