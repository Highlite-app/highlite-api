
import { ApiTags } from "@nestjs/swagger";
import { Controller, Post, Body, NotAcceptableException, Param, Get, NotFoundException, Put, Delete } from "@nestjs/common";
import { v4 as uuid4 } from 'uuid';
import { JwtServices } from "../JwtModule/jwt.service";
import { CompanyService } from "./company.service";
import { CompanyJobPostVideoFeedDTO } from "src/dtos/company/company.job.post.video.feed.dto";
import { CompanyJobPostVideoFeed } from "./models/company.job.post.video.feed";

@Controller('Company')
@ApiTags('Job-Post-Video-Feed-Company')
export class CompanyJobPostVideoFeedController {
    constructor(private readonly jwtServices: JwtServices,
        private readonly companyService: CompanyService) { }

    @Post('createCompanyJobPostVideoFeed')
    async createCompanyProfile(@Body() companyJobPostVideoFeedDto: CompanyJobPostVideoFeedDTO) {
        const jobPostVideoFeedID = uuid4();
        this.companyService.createCompanyJobPostVideoFeed(companyJobPostVideoFeedDto, jobPostVideoFeedID);
        try {
            return {
                id: jobPostVideoFeedID
            }
        } catch (error) {
            throw new NotAcceptableException();
        }


    }

    @Get('getCompanyJobPostVideoFeed/:jobVideoFeedId')
    async getCompanyJobPostProfile(@Param('jobVideoFeedId') jobVideoFeedId: string) {
        console.log("The userid for CompanyProfileDetails is :: " + jobVideoFeedId);
        const companyVideoFeedDetails = await this.companyService.getCompanyJobPostVideoFeed(jobVideoFeedId);

        if (!companyVideoFeedDetails) {
            throw new NotFoundException("Company Details not ");
        }
        return companyVideoFeedDetails;


    }

    @Put('updateCompanyJobPostVideFeed/:id')
    async updateCompanyJobPostDetails(@Param('id') userId: string, @Body() updateCompanyJobPost: Partial<CompanyJobPostVideoFeed>) {
        try {

            const updateCompanyJobPostVideoFeedDetails = await this.companyService.updateCompanyJobPostVideoFeed(userId, updateCompanyJobPost);
            return {
                message: "Company Job Post Details  Updated Successfully",
                company: updateCompanyJobPostVideoFeedDetails
            };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Company not found');
            }
            throw error;
        }
    }


    @Delete('deleteCompanyJobPostVideoFeed/:id')
    async deleteCompanyJobPostVideoFeed(@Param('id') postId: string) {
        try {
            const deleteCompanyJobPostVideoFeed = await this.companyService.deletedCompanyJobPostVideoFeed(postId);
            return {
                message: 'Company Job Post Details Deleted Successfully',
                company: deleteCompanyJobPostVideoFeed,
            };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Company job post not found');
            }
            throw error;
        }
    }

}