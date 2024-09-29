/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Types } from 'mongoose';
import { WorkInterface } from './work.interface';
import { SubscriptionInterface } from './subscription.interface';
import { NotificationInterface } from './notification.interface';
import { CompanyInterface } from './company.interface';
import { IdentityInterface } from './identity.interface';
export declare class UserInterface {
    _id?: Types.ObjectId;
    userType: string;
    lookingFor: string;
    skills: Array<string>;
    tools: Array<string>;
    workType: string;
    hourlyRate: string;
    city: string;
    country: string;
    email: string;
    identities: Array<IdentityInterface>;
    firstName?: string;
    lastName?: string;
    username?: string;
    jobTitle?: string;
    about?: string;
    website?: string;
    workTime?: string;
    audioType?: string;
    works?: Array<WorkInterface>;
    profilePhoto?: string;
    profileVideo?: string;
    jobStatus?: string;
    phoneCountryCode?: string;
    phoneNumber?: string;
    subscription?: SubscriptionInterface;
    notificationSettings?: NotificationInterface;
    company?: CompanyInterface;
}
