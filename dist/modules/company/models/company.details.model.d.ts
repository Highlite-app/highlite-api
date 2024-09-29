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
import { Document } from 'mongoose';
export default class CompanyDetails extends Document {
    companyId: string;
    companyName: string;
    industry: string;
    city: string;
    country: string;
    website: string;
    companySize: string;
    benefits: [string];
    about: string;
    email: string;
    userName: string;
    companyLogo: string;
}
export declare const CompanyDetailsSchemas: import("mongoose").Schema<CompanyDetails, import("mongoose").Model<CompanyDetails, any, any, any, Document<unknown, any, CompanyDetails> & CompanyDetails & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CompanyDetails, Document<unknown, {}, import("mongoose").FlatRecord<CompanyDetails>> & import("mongoose").FlatRecord<CompanyDetails> & {
    _id: import("mongoose").Types.ObjectId;
}>;
