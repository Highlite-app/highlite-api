import { ApiTags } from "@nestjs/swagger";
import { Controller, Post, Body, NotAcceptableException, Param, Get, NotFoundException, Put  , Delete} from "@nestjs/common";
import { v4 as uuid4 } from 'uuid';
import { JwtServices } from "../JwtModule/jwt.service";
import { CompanyService } from "./company.service";
import { CompanyJobPostDTO } from "src/dtos/company/company.job.post.dto";
import { CompanyJobPostDetails } from "./models/company.job.post.model";

@Controller("Company")
@ApiTags('Job-Post-Company')
export class CompanyJobPostController {

    constructor(private readonly jwtServices: JwtServices,
        private readonly companyService: CompanyService) { }

    @Post('createCompanyJobPost')
    async createCompanyProfile(@Body() companyJobPostDto: CompanyJobPostDTO) {
        const jobPostID = uuid4();
        this.companyService.createCompanyJobPost(companyJobPostDto, jobPostID);
        try {
            return {
                id: jobPostID
            }
        } catch (error) {
            throw new NotAcceptableException();
        }


    }

    @Get('getCompanyJobPost/:jobPostId')
    async getCompanyJobPostProfile(@Param('jobPostId') jobPostId: string) {
        console.log("The userid for CompanyProfileDetails is :: " + jobPostId);
        const companyProfileDetails = await this.companyService.getCompanyJobPost(jobPostId);

        if (!companyProfileDetails) {
            throw new NotFoundException("Company Details not ");
        }
        return companyProfileDetails;


    }

    @Put('updateCompanyJobPost/:id')
    async updateCompanyJobPostDetails(@Param('id') userId: string, @Body() updateCompanyJobPost: Partial<CompanyJobPostDetails>) {
        try {

            const updateCompanyDetails = await this.companyService.updateCompanyJobPost(userId, updateCompanyJobPost);
            return {
                message: "Company Job Post Details  Updated Successfully",
                company: updateCompanyDetails
            };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Company not found');
            }
            throw error;
        }
    }

   
    @Delete('deleteCompanyJobPost/:id')
    async deleteCompanyJobPost(@Param('id') postId: string) {
        try {
            const deletedCompanyDetails = await this.companyService.deleteCompanyJobPost(postId);
            return {
                message: 'Company Job Post Details Deleted Successfully',
                company: deletedCompanyDetails,
            };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Company job post not found');
            }
            throw error;
        }
    }
    @Get('getJobPostByCompanyID/:id')
    async getJobPostByCompnayId(@Param('id') companyID: string){
        const companyJobPostListById = await this.companyService.getJobPostByCompanyId(companyID) ; 

        if(!companyJobPostListById){
            throw new NotFoundException("No Job Post Found with "+companyID );
        }else{
            return companyJobPostListById ; 
        }
    }

}