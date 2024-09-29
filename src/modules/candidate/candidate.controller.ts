import { Body, Controller, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { CandidateService } from "./candidate.service";
import { CandidateOnBoardingDto } from "src/dtos/candidate/candidate.onboarding.dto";
import { ApiTags } from "@nestjs/swagger";
import { UserTypeEnum } from "src/enums/user.type.enum";
import { JwtServices } from "../JwtModule/jwt.service";
import { getCandidateByUserIdDto } from "src/dtos/getCandidate.userid.dto";
import { CandidateDetails } from "./model/candidate.details";
import { v4 as uuid4 } from 'uuid';
import { DateTimeService } from "src/services/datetime.service";

@Controller('Candidate')
@ApiTags("OnBoarding-Candidate")
export class CandidateDeatilsController {
    constructor(
        private readonly candidateService: CandidateService,
        private readonly jwtServices: JwtServices) { }

    @Post("candidateDetails")
    async candidateDetails(@Body() candidateDto: CandidateOnBoardingDto) {

        const userId = uuid4();
        const user = { username: candidateDto.firstName + candidateDto.lastName, id: userId };
        const accessToken = await this.jwtServices.generateToken(user);
        const tokenId = await this.candidateService.getTokenId();
        this.candidateService.candidateDetails(candidateDto, userId);
        return {
            "status": true,
            "data": {
                id: userId,
                message: "Data Stored Successfully",
                accessToken: accessToken,
                tokenId: tokenId,
                userType: UserTypeEnum.candidate,
                isLoggedIn: true
            }
        }



    }

    @Get('getCandidateDetails/:candidateId')
    // @ApiTags("Get Candidate Details")
    async getCandidateDetails(@Param('candidateId') candidateId: string) {
        console.log("The user id in getCandidate is ::" + candidateId);
        const candidate = await this.candidateService.getCandidateDetails(candidateId);

        if (!candidate) {
            throw new NotFoundException("Candidate Cannot Found");
        }
        return candidate;

    };

   //This is Put Request for main  
    @Put('updateCandidate/:candidateId')
    async updateCandidate(@Param('candidateId') candidateId: string, @Body() updateDetails: Partial<CandidateOnBoardingDto>) {
        try {

            const updateCandidate = await this.candidateService.updateCandidate(candidateId, updateDetails);
            return { message: 'Candidate details updated successfully', candidate: updateCandidate };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Candidate not found');
            }
            throw error;
        }

    }

    





}