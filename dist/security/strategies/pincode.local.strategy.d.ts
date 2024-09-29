import { Strategy } from 'passport-local';
import { IdentityService } from '../../modules/identity/identity.service';
declare const PincodeLocalStrategy_base: new (...args: any[]) => Strategy;
export declare class PincodeLocalStrategy extends PincodeLocalStrategy_base {
    private identityService;
    constructor(identityService: IdentityService);
    validate(request: any, email: string, pin: string): Promise<any>;
}
export {};
