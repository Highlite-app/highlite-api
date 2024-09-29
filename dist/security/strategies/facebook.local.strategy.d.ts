import { Strategy } from 'passport-local';
import { IdentityService } from '../../modules/identity/identity.service';
declare const FacebookLocalStrategy_base: new (...args: any[]) => Strategy;
export declare class FacebookLocalStrategy extends FacebookLocalStrategy_base {
    private identityService;
    constructor(identityService: IdentityService);
    validate(request: any, accessToken: string): Promise<any>;
}
export {};
