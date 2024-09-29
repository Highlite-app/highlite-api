import { UserEntity } from "./user.entity";
export interface UserRepository {
    findOneByEmail(email: string): Promise<UserEntity | null>;
    findOneByProviderId(providerId: string, provider: string): Promise<UserEntity | null>;
    save(userEntity: UserEntity): Promise<UserEntity>;
}
