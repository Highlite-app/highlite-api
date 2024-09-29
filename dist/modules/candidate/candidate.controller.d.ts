import { CandidateService } from "./candidate.service";
import { CandidateOnBoardingDto } from "src/dtos/candidate/candidate.onboarding.dto";
import { UserTypeEnum } from "src/enums/user.type.enum";
import { JwtServices } from "../JwtModule/jwt.service";
import { CandidateDetails } from "./model/candidate.details";
export declare class CandidateDeatilsController {
    private readonly candidateService;
    private readonly jwtServices;
    constructor(candidateService: CandidateService, jwtServices: JwtServices);
    candidateDetails(candidateDto: CandidateOnBoardingDto): Promise<{
        status: boolean;
        data: {
            id: string;
            message: string;
            accessToken: string;
            tokenId: string;
            userType: UserTypeEnum;
            isLoggedIn: boolean;
        };
    }>;
    getCandidateDetails(candidateId: string): Promise<CandidateDetails>;
    updateCandidate(candidateId: string, updateDetails: Partial<CandidateOnBoardingDto>): Promise<{
        message: string;
        candidate: any;
    }>;
}
