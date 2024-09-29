import { Injectable } from "@nestjs/common";
import { CompanyOnBoardingDTO } from "src/dtos/company/company.details.dto";
import { CompanyJobPostDTO } from "src/dtos/company/company.job.post.dto";
import { CompanyHomeFeedDetailsDTO } from "src/dtos/home_feed/company/company.home.feed.details.dto";
import { CompanyJobFeedItemsResponseDTO } from "src/dtos/home_feed/company/company_job_item_response_dto";
import { CompanyService } from "src/modules/company/company.service";



@Injectable()
export class CandidateHomeFeedService {

    constructor(private companyService: CompanyService

    ) { }


    async getHomeFeed(nextToken?: string): Promise<CompanyJobFeedItemsResponseDTO> {


        //  const   companyProfileDetails = await this.companyService.getAllCompanyProfileDetails() ; 
        const companyJobPostDetails = await this.companyService.getAllCompanyJobPostDetails();
        const companyJobPosVideoFeedDetails = await this.companyService.getAllCompanyJobPostVideoFeedDetails();
        const companyOnboarding = await this.companyService.getAllCompanyOnboarding();
        const companyHomeFeedDetails = await this.companyService.getAllCompanyHomeFeedDetails();



        const homeFeedResponse: CompanyJobFeedItemsResponseDTO = {

            items: companyJobPosVideoFeedDetails.map((jobPostVideoFed) =>
            ({


                jobVideoFeedId: jobPostVideoFed.jobVideoFeedId,


                playbackId: jobPostVideoFed.playbackId,



                thumbnailWidth: jobPostVideoFed.thumbnailWidth,

                thumbnailHeight: jobPostVideoFed.thumbnailHeight,




                assetId: jobPostVideoFed.assetId,


                uploadId: jobPostVideoFed.uploadId,


                jobStatus: jobPostVideoFed.jobStatus,

                companyId: jobPostVideoFed.companyId,


                companyOnboarding: companyOnboarding.find((companyOnboarding) => companyOnboarding.companyId == jobPostVideoFed.companyId) as CompanyOnBoardingDTO,


                companyJobPost: companyJobPostDetails.find((jobPost) => jobPost.companyId == jobPostVideoFed.companyId) as CompanyJobPostDTO,


                companyHomeFeedDetails: companyHomeFeedDetails.find((homefeedDetails) => homefeedDetails.companyId == jobPostVideoFed.companyId) as CompanyHomeFeedDetailsDTO,




            })),
            nextToken,

        };

        return homeFeedResponse;

    }

    async getHomeFeedByCompanyID(companyID: string, nextToken?: string): Promise<CompanyJobFeedItemsResponseDTO> {


        const companyJobPostDetails = await this.companyService.getAllCompanyJobPostDetails();
        const companyJobPosVideoFeedDetails = (await this.companyService.getAllCompanyJobPostVideoFeedDetails()).filter(jobPostVideFeed => jobPostVideFeed.companyId == companyID);
        const companyOnboarding = (await this.companyService.getAllCompanyOnboarding());
        const companyHomeFeedDetails = await this.companyService.getAllCompanyHomeFeedDetails();



        const homeFeedResponse: CompanyJobFeedItemsResponseDTO = {
            items: companyJobPosVideoFeedDetails.map((jobPostVideoFed) => ({


                jobVideoFeedId: jobPostVideoFed.jobVideoFeedId,


                playbackId: jobPostVideoFed.playbackId,


                thumbnailHeight: jobPostVideoFed.thumbnailHeight,


                thumbnailWidth: jobPostVideoFed.thumbnailWidth,


                assetId: jobPostVideoFed.assetId,


                uploadId: jobPostVideoFed.uploadId,


                jobStatus: jobPostVideoFed.jobStatus,

                companyId: jobPostVideoFed.companyId,


                companyOnboarding: companyOnboarding.find((companyOnboarding) => companyOnboarding.companyId == companyID) as CompanyOnBoardingDTO,


                companyJobPost: companyJobPostDetails.find((jobPost) => jobPost.companyId == companyID) as CompanyJobPostDTO,


                companyHomeFeedDetails: companyHomeFeedDetails.find((homefeedDetails) => homefeedDetails.companyId == companyID) as CompanyHomeFeedDetailsDTO,




            })),
            nextToken,

        };
        return homeFeedResponse;
    }

    async getPaginatedByCompanyID(companyID: string, nextToken?: string): Promise<CompanyJobFeedItemsResponseDTO> {

        const companyOnboarding = await this.companyService.getAllCompanyOnboarding();
        const companyJobPosDetails = await this.companyService.getAllCompanyJobPostDetails();
        const filteredCompanyPostVideoFeedDetails = (await this.companyService.getAllCompanyJobPostVideoFeedDetails()).filter(jobPostVideoFeed => jobPostVideoFeed.companyId == companyID);
        const companyHomeFeedDetails = await this.companyService.getAllCompanyHomeFeedDetails();

        const page = 1; // Start from the first Page
        const pageSize = 10; // no of items per page // For Highlite per Instance 




        const startIndex = (page - 1) * pageSize;


        const paginatedCompanyJobPostVideoFeed = filteredCompanyPostVideoFeedDetails.slice(startIndex, startIndex + pageSize);

        const paginatedResponse: CompanyJobFeedItemsResponseDTO = {
            items: paginatedCompanyJobPostVideoFeed.map((jobPostVideoFeed) =>
            (
                {


                    jobVideoFeedId: jobPostVideoFeed.jobVideoFeedId,


                    playbackId: jobPostVideoFeed.playbackId,


                    thumbnailHeight: jobPostVideoFeed.thumbnailHeight,


                    thumbnailWidth: jobPostVideoFeed.thumbnailWidth,


                    assetId: jobPostVideoFeed.assetId,


                    uploadId: jobPostVideoFeed.uploadId,


                    jobStatus: jobPostVideoFeed.jobStatus,

                    companyId: jobPostVideoFeed.companyId,


                    companyOnboarding: companyOnboarding.find((companyOnboarding) => companyOnboarding.companyId == companyID) as CompanyOnBoardingDTO,


                    companyJobPost: companyJobPosDetails.find((jobPost) => jobPost.companyId == companyID) as CompanyJobPostDTO,


                    companyHomeFeedDetails: companyHomeFeedDetails.find((homefeedDetails) => homefeedDetails.companyId == companyID) as CompanyHomeFeedDetailsDTO,




                }
            )),
            nextToken,

        };
        return paginatedResponse;


    }


  



}