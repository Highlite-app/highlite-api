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
import { CandidateDetails } from "./model/candidate.details";
import { CandidateOnBoardingDto } from "src/dtos/candidate/candidate.onboarding.dto";
import { DateTimeService } from "src/services/datetime.service";
export declare class CandidateService {
    private readonly candidateModel;
    private readonly dateTimeServie;
    constructor(candidateModel: Model<any>, dateTimeServie: DateTimeService);
    candidateDetails(candidateDetailsDto: CandidateOnBoardingDto, userId: string): Promise<any>;
    getTokenId(): Promise<string>;
    getCandidateDetails(candidateId: string): Promise<CandidateDetails | null>;
    updateCandidate(candidateId: string, updateCandidate: Partial<CandidateDetails> | Promise<CandidateDetails> | null): Promise<any>;
    getAllCandidateDetails(): Promise<CandidateDetails[]>;
    findCandidateByEmail(email: string): Promise<CandidateDetails | null>;
}
