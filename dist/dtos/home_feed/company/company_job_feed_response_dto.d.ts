import { CompanyJobPostDTO } from 'src/dtos/company/company.job.post.dto';
import { CompanyOnBoardingDTO } from 'src/dtos/company/company.details.dto';
import { CompanyHomeFeedDetailsDTO } from './company.home.feed.details.dto';
export declare class CompanyJobFeedResponseDTO {
    jobVideoFeedId: string;
    playbackId: string;
    companyId: string;
    uploadId: string;
    assetId: string;
    thumbnailWidth: string;
    thumbnailHeight: string;
    jobStatus: string;
    companyOnboarding: CompanyOnBoardingDTO;
    companyHomeFeedDetails: CompanyHomeFeedDetailsDTO;
    companyJobPost: CompanyJobPostDTO;
}
