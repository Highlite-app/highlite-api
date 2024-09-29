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
import { String } from "aws-sdk/clients/bedrockagent";
import { Model } from "mongoose";
import { CandidateProjectDTO } from "src/dtos/upload.candate.section/upload.project/upload.project.dto";
import { UploadAboutDTO } from "src/dtos/upload.candate.section/upload.resume/upload.about.dto";
import { CandidateEducationDTO } from "src/dtos/upload.candate.section/upload.resume/upload.education.dto";
import { CandidateEmploymentDTO } from "src/dtos/upload.candate.section/upload.resume/upload.employment.dto";
import { UploadCandidateAbout } from "src/schemas/upload.candidate.section/upload.about.schema";
import { UploadCandidateEducation } from "src/schemas/upload.candidate.section/upload.education.schema";
import { UploadCandidateEmployment } from "src/schemas/upload.candidate.section/upload.employment.schema";
import { UploadCandidateProject } from "src/schemas/upload.candidate.section/upload.proejct.schema";
export declare class UploadCandidateService {
    private readonly uploadCandidateAboutModel;
    private readonly uploadCandidateProjectModel;
    private readonly uploadCandidateEducationModel;
    private readonly uploadCandidateEmploymentnModel;
    constructor(uploadCandidateAboutModel: Model<UploadCandidateAbout>, uploadCandidateProjectModel: Model<UploadCandidateProject>, uploadCandidateEducationModel: Model<UploadCandidateEducation>, uploadCandidateEmploymentnModel: Model<UploadCandidateEmployment>);
    createCandidateAbout(uploadAboutDto: UploadAboutDTO, aboutId: String): Promise<UploadCandidateAbout | any>;
    getCandidateAbout(aboutId: String): Promise<UploadCandidateAbout | null>;
    getCandidateAboutByCandidateId(candidateId: String): Promise<UploadCandidateAbout | null>;
    updateCandidateAbout(aboutId: String, upldateCandidateAbout: Promise<UploadCandidateAbout> | Partial<UploadCandidateAbout | null>): Promise<import("mongoose").Document<unknown, {}, UploadCandidateAbout> & UploadCandidateAbout & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    creteCandidateProject(candidateProjectDTO: CandidateProjectDTO, projectId: string): Promise<UploadCandidateProject | any>;
    getCandidateProject(projectId: String): Promise<UploadCandidateProject | null>;
    getprojectByCandidateId(candidateId: String): Promise<UploadCandidateProject[]>;
    updateCandidateProject(projectId: String, upldateCandidateProject: Promise<UploadCandidateProject> | Partial<UploadCandidateProject | null>): Promise<import("mongoose").Document<unknown, {}, UploadCandidateProject> & UploadCandidateProject & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteCandidateProject(projectId: String): Promise<UploadCandidateProject | null>;
    createCandidateEducation(candidateEducationtDTO: CandidateEducationDTO, educationId: string): Promise<UploadCandidateEducation | any>;
    getCandidateEducation(educationId: String): Promise<UploadCandidateEducation | null>;
    getEducationtByCandidateId(candidateId: String): Promise<UploadCandidateEducation[]>;
    updateCandidateEducation(educationId: String, upldateCandidateEducation: Promise<UploadCandidateEducation> | Partial<UploadCandidateEducation | null>): Promise<import("mongoose").Document<unknown, {}, UploadCandidateEducation> & UploadCandidateEducation & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteCandidateEducation(educationId: String): Promise<UploadCandidateEducation | null>;
    createdCandidateEmployment(candidateEmploymentDTO: CandidateEmploymentDTO, employmentId: string): Promise<UploadCandidateEmployment | any>;
    getCandidateEmployment(employmentId: String): Promise<UploadCandidateEmployment | null>;
    getEmploymentByCandidateId(candidateId: String): Promise<UploadCandidateEmployment[]>;
    updateCandidateEmployment(employmentId: String, upldateCandidateEmployment: Promise<UploadCandidateEmployment> | Partial<UploadCandidateEmployment | null>): Promise<import("mongoose").Document<unknown, {}, UploadCandidateEmployment> & UploadCandidateEmployment & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteCandidateEmployment(employmentId: String): Promise<UploadCandidateEmployment | null>;
    getAllCandidateAbout(): Promise<UploadCandidateAbout[]>;
    getAllCandidateEducation(): Promise<UploadCandidateEducation[]>;
    getAllCandidateEmployment(): Promise<UploadCandidateEmployment[]>;
    getAllCandidateProject(): Promise<UploadCandidateProject[]>;
}
