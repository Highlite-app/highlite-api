import { Strategy } from 'passport-local';
import { IdentityService } from '../../modules/identity/identity.service';
declare const AppleLocalStrategy_base: new (...args: any[]) => Strategy;
export declare class AppleLocalStrategy extends AppleLocalStrategy_base {
    private identityService;
    constructor(identityService: IdentityService);
    validate(request: any, authorizationCode: string): Promise<any>;
}
export {};
