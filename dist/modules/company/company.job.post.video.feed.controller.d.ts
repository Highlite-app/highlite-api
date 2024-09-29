import { JwtServices } from "../JwtModule/jwt.service";
import { CompanyService } from "./company.service";
import { CompanyJobPostVideoFeedDTO } from "src/dtos/company/company.job.post.video.feed.dto";
import { CompanyJobPostVideoFeed } from "./models/company.job.post.video.feed";
export declare class CompanyJobPostVideoFeedController {
    private readonly jwtServices;
    private readonly companyService;
    constructor(jwtServices: JwtServices, companyService: CompanyService);
    createCompanyProfile(companyJobPostVideoFeedDto: CompanyJobPostVideoFeedDTO): Promise<{
        id: string;
    }>;
    getCompanyJobPostProfile(jobVideoFeedId: string): Promise<CompanyJobPostVideoFeed>;
    updateCompanyJobPostDetails(userId: string, updateCompanyJobPost: Partial<CompanyJobPostVideoFeed>): Promise<{
        message: string;
        company: any;
    }>;
    deleteCompanyJobPostVideoFeed(postId: string): Promise<{
        message: string;
        company: CompanyJobPostVideoFeed;
    }>;
}
