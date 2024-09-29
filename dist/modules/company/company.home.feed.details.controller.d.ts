import { CompanyService } from "./company.service";
import { CompanyHomeFeedDetails } from "./models/company.home.feed.details";
import { CompanyHomeFeedDetailsDTO } from "src/dtos/home_feed/company/company.home.feed.details.dto";
export declare class CompanyHomeFeedDetailsController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    createCompanyHomeFeedDetails(companyHomeFeedDetails: CompanyHomeFeedDetailsDTO): Promise<{
        companHomeFeedDetailsId: string;
    }>;
    getCompanyHomeFeedDetails(companHomeFeedDetailsId: string): Promise<any>;
    updateHomeFeedDFetails(jobVideoFeedId: string, updateHomeFeedDetails: Partial<CompanyHomeFeedDetails>): Promise<{
        message: string;
        company: any;
    }>;
}
