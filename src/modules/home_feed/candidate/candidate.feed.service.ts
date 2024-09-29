import { Injectable } from "@nestjs/common";
import { CandidateOnBoardingDto } from "src/dtos/candidate/candidate.onboarding.dto";
import { CandidateFeedItemResponseDTO } from "src/dtos/home_feed/candidate/candidate.feed.item.response.dto";
import { UploadAboutDTO } from "src/dtos/upload.candate.section/upload.resume/upload.about.dto";
import { CandidateService } from "src/modules/candidate/candidate.service";
import { UploadCandidateService } from "src/modules/upload.candidate.section/upload.resume/upload.candidate.service";
import { UploadVideService } from "src/modules/upload.candidate.section/upload.video/upload.video.service";
import { UploadCandidateAbout } from "src/schemas/upload.candidate.section/upload.about.schema";

@Injectable()
export class CandidateFeedService {



     constructor(
        private candidateService: CandidateService, 
        private uploadCandidateServie: UploadCandidateService
        , private uploadVideoService: UploadVideService
     ){}

    async getCandidateFeed(nextToken?: string): Promise<CandidateFeedItemResponseDTO> {

        const candidateOnboarding = await this.candidateService.getAllCandidateDetails();

        const uploadCandidateAbout = await this.uploadCandidateServie.getAllCandidateAbout();

        const uploadCandidateEmployment = await this.uploadCandidateServie.getAllCandidateEmployment();

        const uploadCandidateEducation = await this.uploadCandidateServie.getAllCandidateEducation();

        const uploadCandidateProject = await this.uploadCandidateServie.getAllCandidateProject();

        const uploadCandidateVideoDetails = await this.uploadVideoService.getAllCandidateVideo();

        const candidateFeedResponse: CandidateFeedItemResponseDTO = {
            items: uploadCandidateVideoDetails.map((candidateVideo) => ({
                candidateVideoFeedId: candidateVideo.candidateVideoFeedId || '',
                candidateId: candidateVideo.candidateId,
                description: candidateVideo.description,
                thumbnailUrl:  candidateVideo.thumbnailUrl ?? '' ,
                thumbnailWidth: candidateVideo.thumbnailWidth ?? '', // Defaulting to an empty string if undefined
                thumbnailHeight: candidateVideo.thumbnailHeight ?? '', // Defaulting to an empty string if undefined
                playbackId: candidateVideo.playbackId ?? '', // Defaulting to an empty string if undefined
                assetId: candidateVideo.assetId ?? '', // Defaulting to an empty string if undefined
                uploadId: candidateVideo.uploadId ?? '', // Defaulting to an empty string if undefined
                tag: candidateVideo.tag ?? [], // Defaulting to an empty array if undefined
                category: candidateVideo.category ?? [],
                candidateOnBoarding: candidateOnboarding.find((candidate) => candidate.candidateId == candidateVideo.candidateId) as CandidateOnBoardingDto,
                aboutCandidate: uploadCandidateAbout.find((about) => about.candidateId == candidateVideo.candidateId) as UploadAboutDTO,
                candidateEmployment: uploadCandidateEmployment.filter(employment => employment.candidateId === candidateVideo.candidateId) || [],
                candidateEducation: uploadCandidateEducation.filter(education => education.candidateId == candidateVideo.candidateId) || [],
                candidateProject: uploadCandidateProject.filter(project => project.candidateId == candidateVideo.candidateId) || [],


            })),
            nextToken: nextToken
        }

        return candidateFeedResponse;

    }
}
