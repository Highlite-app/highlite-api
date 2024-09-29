import { JwtServices } from "../JwtModule/jwt.service";
import { CompanyService } from "./company.service";
import { CompanyJobPostDTO } from "src/dtos/company/company.job.post.dto";
import { CompanyJobPostDetails } from "./models/company.job.post.model";
export declare class CompanyJobPostController {
    private readonly jwtServices;
    private readonly companyService;
    constructor(jwtServices: JwtServices, companyService: CompanyService);
    createCompanyProfile(companyJobPostDto: CompanyJobPostDTO): Promise<{
        id: string;
    }>;
    getCompanyJobPostProfile(jobPostId: string): Promise<CompanyJobPostDetails>;
    updateCompanyJobPostDetails(userId: string, updateCompanyJobPost: Partial<CompanyJobPostDetails>): Promise<{
        message: string;
        company: any;
    }>;
    deleteCompanyJobPost(postId: string): Promise<{
        message: string;
        company: CompanyJobPostDetails;
    }>;
    getJobPostByCompnayId(companyID: string): Promise<CompanyJobPostDetails[]>;
}
