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
import mongoose, { Document } from "mongoose";
export declare class UploadCandidateAbout extends Document {
    aboutId: string;
    candidateId: string;
    aboutCandidate: string;
    languages: string[];
}
export declare const UploadCandidateAboutschema: mongoose.Schema<UploadCandidateAbout, mongoose.Model<UploadCandidateAbout, any, any, any, mongoose.Document<unknown, any, UploadCandidateAbout> & UploadCandidateAbout & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, UploadCandidateAbout, mongoose.Document<unknown, {}, mongoose.FlatRecord<UploadCandidateAbout>> & mongoose.FlatRecord<UploadCandidateAbout> & {
    _id: mongoose.Types.ObjectId;
}>;
