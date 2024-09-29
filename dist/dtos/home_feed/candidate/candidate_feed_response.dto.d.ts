import { UploadAboutDTO } from 'src/dtos/upload.candate.section/upload.resume/upload.about.dto';
import { UploadCandidateEmployment } from 'src/schemas/upload.candidate.section/upload.employment.schema';
import { UploadCandidateEducation } from 'src/schemas/upload.candidate.section/upload.education.schema';
import { UploadCandidateProject } from 'src/schemas/upload.candidate.section/upload.proejct.schema';
import { CandidateOnBoardingDto } from 'src/dtos/candidate/candidate.onboarding.dto';
export declare class CandidateFeedResponseDTO {
    candidateVideoFeedId: string;
    candidateId: string;
    description: string;
    thumbnailUrl: string;
    thumbnailWidth: string;
    thumbnailHeight: string;
    playbackId: string;
    assetId: string;
    uploadId: string;
    tag: string[];
    category: string[];
    candidateOnBoarding: CandidateOnBoardingDto;
    aboutCandidate: UploadAboutDTO;
    candidateEmployment?: UploadCandidateEmployment[];
    candidateEducation?: UploadCandidateEducation[];
    candidateProject?: UploadCandidateProject[];
}
