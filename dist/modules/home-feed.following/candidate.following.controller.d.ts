import { CandidateFollowingDTO } from "src/dtos/home_feed/candidate/candidate.following.dto";
import { HttpStatus } from "@nestjs/common";
import { CandidateFollowingService } from "./candidate.following.servce";
import { IDRequestDTO } from "src/dtos/home_feed/candidate/ID.request.dto";
export declare class CandidateFollowingController {
    private readonly candidateFollowingService;
    constructor(candidateFollowingService: CandidateFollowingService);
    createCandidateFollowing(candidateFollowingDTO: CandidateFollowingDTO): Promise<{
        id: string;
    }>;
    deleteCandidateFollowing(idrequestDto: IDRequestDTO): Promise<{
        id: string;
        message: string;
    }>;
    deleteMultipleCandidateFollowing(idrequestDto: IDRequestDTO[]): Promise<{
        id: string;
    }>;
    createMultipleandidateFollowing(candidateFollowingDTO: CandidateFollowingDTO[]): Promise<{
        status: HttpStatus;
        message: string;
        data: CandidateFollowingDTO[];
    }>;
}
