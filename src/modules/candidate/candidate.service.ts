import { Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { CandidateDetails } from "./model/candidate.details";
import { InjectModel } from "@nestjs/mongoose";
import { CandidateOnBoardingDto } from "src/dtos/candidate/candidate.onboarding.dto";
import { DateTimeService } from "src/services/datetime.service";

@Injectable()
export class CandidateService {
    constructor(
        @InjectModel(CandidateDetails.name) private readonly candidateModel: Model<any>,
        private readonly dateTimeServie: DateTimeService) { }


    async candidateDetails(candidateDetailsDto: CandidateOnBoardingDto, userId: string): Promise<any> {

        const candidatedetails = new this.candidateModel(candidateDetailsDto);
        candidatedetails.candidateId = userId;
        const savedUser = await candidatedetails.save();
        console.log(savedUser.id);
        return savedUser;

    }


    async getTokenId(): Promise<string> {
        const currentDateTime = this.dateTimeServie.getCurrentDateTime();
        console.log(`*******${currentDateTime}*******`)
        return currentDateTime;
    }


    async getCandidateDetails(candidateId: string): Promise<CandidateDetails | null> {
        return this.candidateModel.findOne({ candidateId }).exec();
    }

    async updateCandidate(candidateId: string, updateCandidate: Partial<CandidateDetails> | Promise<CandidateDetails> | null) {
        const candidate = await this.candidateModel.findOne({ candidateId }).exec();

        if (!candidate) {
            throw new NotFoundException("Candidate Not Found");
        }

        Object.assign(candidate, updateCandidate);

        await candidate.save();

        return candidate;
    }


    async getAllCandidateDetails(): Promise<CandidateDetails[]> {
        const candidateDetails = await this.candidateModel.find().exec();

        return candidateDetails;

    }

    async findCandidateByEmail(email: string ): Promise<CandidateDetails | null>{
     
        const candidateDetails = await this.candidateModel.findOne({email}).exec() ; 

        return  candidateDetails ; 
    }


}