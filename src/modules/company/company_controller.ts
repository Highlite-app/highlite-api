import { Body, Controller, Param, Post, Get, NotFoundException, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CompanyOnBoardingDTO } from "src/dtos/company/company.details.dto";
import { v4 as uuid4 } from 'uuid';
import { UserTypeEnum } from "src/enums/user.type.enum";
import { JwtService } from "@nestjs/jwt";
import { JwtServices } from "../JwtModule/jwt.service";
import { CompanyService } from "./company.service";
import CompanyDetails from "./models/company.details.model";

@Controller("Company")
@ApiTags("User-OnBoaring-Company")
export class CompanyDetailsController {

    constructor(private readonly jwtServices: JwtServices,
        private readonly companyService: CompanyService) { }
 
    @Post('companyOnBoarding')
    async CompanyDetails(@Body() companyDetailsDto: CompanyOnBoardingDTO) {
        const userId = uuid4();
        const user = { username: companyDetailsDto.userName  ,  id: userId };
        const accessToken = await this.jwtServices.generateToken(user);
        const tokenId = await this.companyService.getTokenId();
        this.companyService.companyDetails(companyDetailsDto, userId);
        return {
            "status": true,
            "data": {
                id: userId,
                message: "Data Stored Successfully",
                accessToken: accessToken,
                tokenId: tokenId,
                userType: UserTypeEnum.company,
                isLoggedIn: true
            }
        }
    }

    @Get('getCompanyUserDetails/:companyId')
    async getCompanyDetails(@Param('companyId') companyId: string) {
        console.log("The userid for CompanyDetails is :: " + companyId);
        const compayDetails = await this.companyService.getCompanyDetails(companyId);

        if (!compayDetails) {
            throw new NotFoundException("Company Details not found");
        }

        return compayDetails;


    }


    @Put('updateCompanyUserDetails/:companyId')
    async updateCompanyDetails(@Param('companyId') companyId: string, @Body() updateCompany: Partial<CompanyDetails>) {
        try {

            const updateCompanyDetails = await this.companyService.updateCompany(companyId, updateCompany);
            return {
                message: "Company Details Updated Successfully",
                company: updateCompanyDetails
            };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Candidate not found');
            }
            throw error;
        }
    }






}