import { CompanyOnBoardingDTO } from "src/dtos/company/company.details.dto";
import { UserTypeEnum } from "src/enums/user.type.enum";
import { JwtServices } from "../JwtModule/jwt.service";
import { CompanyService } from "./company.service";
import CompanyDetails from "./models/company.details.model";
export declare class CompanyDetailsController {
    private readonly jwtServices;
    private readonly companyService;
    constructor(jwtServices: JwtServices, companyService: CompanyService);
    CompanyDetails(companyDetailsDto: CompanyOnBoardingDTO): Promise<{
        status: boolean;
        data: {
            id: string;
            message: string;
            accessToken: string;
            tokenId: string;
            userType: UserTypeEnum;
            isLoggedIn: boolean;
        };
    }>;
    getCompanyDetails(companyId: string): Promise<CompanyDetails>;
    updateCompanyDetails(companyId: string, updateCompany: Partial<CompanyDetails>): Promise<{
        message: string;
        company: any;
    }>;
}
