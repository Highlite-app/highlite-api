/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from "mongoose";
import { UploadVideoDTO } from "src/dtos/upload.candate.section/upload.video/upload.video.dto";
import { UploadCandidateVideo } from "src/schemas/upload.candidate.section/upload.video.schema";
export declare class UploadVideService {
    private readonly uploadCandidateVideoModel;
    constructor(uploadCandidateVideoModel: Model<any>);
    uploadCandidateVideo(uploadVideoDTO: UploadVideoDTO, uploadVideoId: string): Promise<UploadCandidateVideo | any>;
    getAllCandidateVideByCandidateId(candidateId: string): Promise<UploadCandidateVideo[]>;
    getAllCandidateVideo(): Promise<UploadCandidateVideo[]>;
}
