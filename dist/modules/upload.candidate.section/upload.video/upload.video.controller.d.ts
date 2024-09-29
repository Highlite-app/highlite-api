import { UploadVideService } from "./upload.video.service";
import { UploadVideoDTO } from "src/dtos/upload.candate.section/upload.video/upload.video.dto";
export declare class UploadVideoController {
    private readonly uploadVideService;
    constructor(uploadVideService: UploadVideService);
    uploadCandidateVideo(uploadVideoDTO: UploadVideoDTO): Promise<{
        status: number;
        candidateVideoId: string;
    } | undefined>;
    getCandudateVideoByCandidateId(candidateId: string): Promise<import("../../../schemas/upload.candidate.section/upload.video.schema").UploadCandidateVideo[]>;
}
