import { JobDurationEnum } from 'src/enums/job.duration.enum';
import { JobStatusEnum } from 'src/enums/job.status.enum';
import { WorkTypeEnum } from 'src/enums/work.type.enum';
export declare class CompanyJobPostDTO {
    jobPostId?: string;
    companyId: string;
    jobVideoFeedId: string;
    jobDescription: string;
    location: string;
    position: string;
    skills: string[];
    tools: string[];
    workType: WorkTypeEnum;
    jobDuration: JobDurationEnum;
    salary: string;
    status: JobStatusEnum;
}
