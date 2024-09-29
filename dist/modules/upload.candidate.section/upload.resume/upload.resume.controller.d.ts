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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { HttpStatus } from '@nestjs/common';
import { UploadCandidateService } from './upload.candidate.service';
import { UploadAboutDTO } from 'src/dtos/upload.candate.section/upload.resume/upload.about.dto';
import { CandidateProjectDTO } from 'src/dtos/upload.candate.section/upload.project/upload.project.dto';
import { CandidateEducationDTO } from 'src/dtos/upload.candate.section/upload.resume/upload.education.dto';
import { CandidateEmploymentDTO } from 'src/dtos/upload.candate.section/upload.resume/upload.employment.dto';
import { UploadCandidateProject } from 'src/schemas/upload.candidate.section/upload.proejct.schema';
import { UploadCandidateEducation } from 'src/schemas/upload.candidate.section/upload.education.schema';
import { UploadCandidateEmployment } from 'src/schemas/upload.candidate.section/upload.employment.schema';
export declare class UploadResumeController {
    private readonly uploadCandidateService;
    constructor(uploadCandidateService: UploadCandidateService);
    createCandidateAbout(uploadAboutDTO: UploadAboutDTO): Promise<{
        status: HttpStatus;
        aboutId: string;
        candidateId: string;
        message: string;
    }>;
    getCandidateAbout(aboutId: string): Promise<import("../../../schemas/upload.candidate.section/upload.about.schema").UploadCandidateAbout | null>;
    getCandidateAboutByCandidateId(candidateId: string): Promise<import("../../../schemas/upload.candidate.section/upload.about.schema").UploadCandidateAbout | null>;
    createCandidateProject(candidateProjectDTO: CandidateProjectDTO): Promise<{
        status: HttpStatus;
        projectId: string;
        candidateId: string;
        message: string;
    }>;
    uploadCandidateProject(projectId: string): Promise<UploadCandidateProject | null>;
    uploadCandidateProjectByCandidateId(candidateId: string): Promise<UploadCandidateProject[]>;
    updateCandidateProject(projectId: string, candidateProject: Partial<UploadCandidateProject>): Promise<import("mongoose").Document<unknown, {}, UploadCandidateProject> & UploadCandidateProject & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteCandidateProject(projectId: string): Promise<UploadCandidateProject | null>;
    createCandidateEducation(candidateEducationDTO: CandidateEducationDTO): Promise<{
        status: HttpStatus;
        educationId: string;
        candidateId: string;
        message: string;
    }>;
    getCandidateEducation(educationId: string): Promise<UploadCandidateEducation | null>;
    uploadCandidateEducationByCandidateId(candidateId: string): Promise<UploadCandidateEducation[]>;
    updateCandidateEducation(educationId: string, candidateEducation: Partial<UploadCandidateEducation>): Promise<import("mongoose").Document<unknown, {}, UploadCandidateEducation> & UploadCandidateEducation & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteCandidateEducation(educationId: string): Promise<UploadCandidateEducation | null>;
    uploadCandidateEmployment(candidateEmploymentnDTO: CandidateEmploymentDTO): Promise<{
        status: HttpStatus;
        employmentId: string;
        candidateId: string;
        message: string;
    }>;
    getCandidateEmployment(employmentId: string): Promise<UploadCandidateEmployment | null>;
    uploadCandidateEmploymentyCandidateId(candidateId: string): Promise<UploadCandidateEmployment[]>;
    updateCandidateEmployment(employmentId: string, candiateEmployment: Partial<UploadCandidateEmployment>): Promise<import("mongoose").Document<unknown, {}, UploadCandidateEmployment> & UploadCandidateEmployment & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteCandidateEmployment(employmentId: string): Promise<UploadCandidateEmployment | null>;
}
