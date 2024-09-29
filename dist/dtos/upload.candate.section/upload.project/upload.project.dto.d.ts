import { PorjectStatus } from "src/enums/project.status.enum";
export declare class CandidateProjectDTO {
    projectId?: string;
    candidateId: string;
    projectTitle: string;
    projectClient: string;
    projectStatus: PorjectStatus;
    projectStart: string;
    projectFinish?: string;
    projectDetails: string;
    projectSkills?: string[];
    projectTools?: string[];
}
