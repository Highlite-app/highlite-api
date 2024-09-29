import { CandidateFeedItemResponseDTO } from "src/dtos/home_feed/candidate/candidate.feed.item.response.dto";
import { CandidateService } from "src/modules/candidate/candidate.service";
import { UploadCandidateService } from "src/modules/upload.candidate.section/upload.resume/upload.candidate.service";
import { UploadVideService } from "src/modules/upload.candidate.section/upload.video/upload.video.service";
export declare class CandidateFeedService {
    private candidateService;
    private uploadCandidateServie;
    private uploadVideoService;
    constructor(candidateService: CandidateService, uploadCandidateServie: UploadCandidateService, uploadVideoService: UploadVideService);
    getCandidateFeed(nextToken?: string): Promise<CandidateFeedItemResponseDTO>;
}
