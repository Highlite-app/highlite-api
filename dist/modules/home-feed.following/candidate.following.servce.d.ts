import { CandidateFollowingDTO } from "src/dtos/home_feed/candidate/candidate.following.dto";
import { CompanyService } from "src/modules/company/company.service";
export declare class CandidateFollowingService {
    private readonly companyService;
    constructor(companyService: CompanyService);
    createCandidateFollowing(candidateFollowingDto: CandidateFollowingDTO): Promise<{
        id: string;
    }>;
    deleteCandidateFollowing(id: string): Promise<{
        id: string;
    }>;
    deleteMultipleCandidateFollowing(id: string): Promise<{
        id: string;
    }>;
}
