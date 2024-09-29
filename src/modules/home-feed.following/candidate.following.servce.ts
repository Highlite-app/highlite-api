import { Injectable } from "@nestjs/common";
import { CandidateFollowingDTO } from "src/dtos/home_feed/candidate/candidate.following.dto";
import { CandidateService } from "src/modules/candidate/candidate.service";
import { CompanyService } from "src/modules/company/company.service";
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class CandidateFollowingService {

    constructor(private readonly companyService: CompanyService,
        //private readonly candidateService: CandidateService
    ) { }

    async createCandidateFollowing(candidateFollowingDto: CandidateFollowingDTO): Promise<{id: string}> {

        const companyJobPostDetailsByJobPostID = await this.companyService.getJobPostByJobPostID(candidateFollowingDto.jobPostId);
        const companyJobPostDetailsByCompanyID = await this.companyService.getJobPostByCompanyId(candidateFollowingDto.companyId);

       // const userExist = await this.candidateService.getCandidateDetails(candidateFollowingDto.currentUserID);


        if (companyJobPostDetailsByCompanyID && companyJobPostDetailsByJobPostID) {
            candidateFollowingDto.id = uuid4();

        }

        return { id: candidateFollowingDto.id };

    }

    async deleteCandidateFollowing( id:string):Promise<{id:string}>{



        const ids = uuid4() ; 

        return ({id: ids}); 
    }

    async deleteMultipleCandidateFollowing( id:string):Promise<{id:string}>{



        const ids = uuid4() ; 

        return ({id: ids
               

        }); 
    }
}


