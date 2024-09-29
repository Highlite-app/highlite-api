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
import { WorkTypeEnum } from "src/enums/work.type.enum";
import { JobDurationEnum } from "src/enums/job.duration.enum";
import mongoose, { Document } from "mongoose";
export declare class CandidateDetails extends Document {
    candidateId: string;
    firstName: string;
    lastName: string;
    position: string;
    skills: string[];
    tools: string[];
    workType: WorkTypeEnum;
    jobDuration: JobDurationEnum;
    salary: string;
    city: string;
    country: string;
    email: string;
    username: string;
    about: string;
    profilePicture: string;
}
export declare const CandidateModelSchema: mongoose.Schema<CandidateDetails, mongoose.Model<CandidateDetails, any, any, any, mongoose.Document<unknown, any, CandidateDetails> & CandidateDetails & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, CandidateDetails, mongoose.Document<unknown, {}, mongoose.FlatRecord<CandidateDetails>> & mongoose.FlatRecord<CandidateDetails> & {
    _id: mongoose.Types.ObjectId;
}>;
