import { CompanyJobFeedItemsResponseDTO } from "src/dtos/home_feed/company/company_job_item_response_dto";
import { CandidateHomeFeedService } from "./candidate.home.feed.service";
export declare class CandidateHomeFeedController {
    private readonly candidateHomeFeedService;
    constructor(candidateHomeFeedService: CandidateHomeFeedService);
    getNextToken(nextToken: string | null | undefined): Promise<string>;
    getHomeFeed(nextToken?: string): Promise<CompanyJobFeedItemsResponseDTO>;
    fetchAllByCompany(companyId: string, nextToken?: string): Promise<CompanyJobFeedItemsResponseDTO>;
    fetchAllPaginatedByCompany(companyId: string, nextToken?: string): Promise<CompanyJobFeedItemsResponseDTO>;
}
