import { CandidateFeedItemResponseDTO } from "src/dtos/home_feed/candidate/candidate.feed.item.response.dto";
import { CandidateFeedService } from "./candidate.feed.service";
export declare class CandidateFeedController {
    private readonly candidateFeedService;
    constructor(candidateFeedService: CandidateFeedService);
    getCandidateFeed(nextToken?: string): Promise<CandidateFeedItemResponseDTO>;
}
