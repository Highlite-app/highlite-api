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
import { PorjectStatus } from "src/enums/project.status.enum";
import mongoose, { Document } from "mongoose";
import { ProjectStatus } from "aws-sdk/clients/rekognition";
export declare class UploadCandidateProject extends Document {
    projectId: string;
    candidateId: string;
    projectTitle: string;
    projectClient: string;
    projectStatus: ProjectStatus;
    projectStart: string;
    projectFinish: PorjectStatus;
    projectDetails: string;
    projectSkills?: string[];
    projectTools?: string[];
}
export declare const UploadCandidateProjectSchema: mongoose.Schema<UploadCandidateProject, mongoose.Model<UploadCandidateProject, any, any, any, mongoose.Document<unknown, any, UploadCandidateProject> & UploadCandidateProject & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, UploadCandidateProject, mongoose.Document<unknown, {}, mongoose.FlatRecord<UploadCandidateProject>> & mongoose.FlatRecord<UploadCandidateProject> & {
    _id: mongoose.Types.ObjectId;
}>;
