import { WorkTypeEnum } from 'src/enums/work.type.enum';
import { JobDurationEnum } from 'src/enums/job.duration.enum';
export declare class CandidateOnBoardingDto {
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
