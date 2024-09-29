import { CompanyJobFeedItemsResponseDTO } from "src/dtos/home_feed/company/company_job_item_response_dto";
import { CompanyService } from "src/modules/company/company.service";
export declare class CandidateHomeFeedService {
    private companyService;
    constructor(companyService: CompanyService);
    getHomeFeed(nextToken?: string): Promise<CompanyJobFeedItemsResponseDTO>;
    getHomeFeedByCompanyID(companyID: string, nextToken?: string): Promise<CompanyJobFeedItemsResponseDTO>;
    getPaginatedByCompanyID(companyID: string, nextToken?: string): Promise<CompanyJobFeedItemsResponseDTO>;
}
