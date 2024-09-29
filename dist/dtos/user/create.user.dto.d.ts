import { UserTypeEnum } from 'src/enums/user.type.enum';
export declare class CreateUserDTO {
    firstName: string;
    email: string;
    provider: string;
    providerId: string;
    userType: UserTypeEnum;
}
