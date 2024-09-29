import { Strategy } from 'passport-local';
import { OAuth2Client } from 'google-auth-library';
import { IdentityService } from '../../modules/identity/identity.service';
declare const GoogleLocalStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleLocalStrategy extends GoogleLocalStrategy_base {
    private identityService;
    private readonly client;
    constructor(identityService: IdentityService, client: OAuth2Client);
    validate(request: any, accessToken: string): Promise<any>;
}
export {};
