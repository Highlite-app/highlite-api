import { CompanyOnBoardingDTO } from '../company/company.details.dto';
import { CompanyJobPostDTO } from '../company/company.job.post.dto';
import { CandidateOnBoardingDto } from '../candidate/candidate.onboarding.dto';
import { UploadVideoDTO } from '../upload.candate.section/upload.video/upload.video.dto';
import { CompanyJobPostVideoFeedDTO } from '../company/company.job.post.video.feed.dto';
import { CompanyHomeFeedDetailsDTO } from '../home_feed/company/company.home.feed.details.dto';
import { CandidateHomeFeedDetailsDTO } from '../home_feed/candidate/candidate.home.feed.details.dto';
import { UploadCandidateEducation } from 'src/schemas/upload.candidate.section/upload.education.schema';
import { UploadCandidateEmployment } from 'src/schemas/upload.candidate.section/upload.employment.schema';
import { UploadCandidateProject } from 'src/schemas/upload.candidate.section/upload.proejct.schema';
import { UploadCandidateAbout } from 'src/schemas/upload.candidate.section/upload.about.schema';
export declare class BookmarkInfo {
    bookmarkInfoId: string;
    type: string;
    bookmarkCollectionId: string;
    referenceId: string;
    candidateOnBoarding?: CandidateOnBoardingDto | null;
    candidateVideoFeed?: UploadVideoDTO | null;
    aboutCandidate?: UploadCandidateAbout | null;
    candidateEducation?: UploadCandidateEducation[] | [];
    candidateEmployment?: UploadCandidateEmployment[] | [];
    candidateProject?: UploadCandidateProject[] | [];
    candidateHomeFeedDetails?: CandidateHomeFeedDetailsDTO | null;
    companyOnboarding?: CompanyOnBoardingDTO | null;
    jobPosting?: CompanyJobPostDTO | null;
    companyHomeFeedDetails?: CompanyHomeFeedDetailsDTO | null;
    companyJobPostVideoFeed?: CompanyJobPostVideoFeedDTO | null;
}
