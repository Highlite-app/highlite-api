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
import * as mongoose from 'mongoose';
export declare const CompanyDetailsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    id?: string | null | undefined;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    city?: string | null | undefined;
    country?: string | null | undefined;
    title?: string | null | undefined;
    companyId?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    emailAddress?: string | null | undefined;
    language?: string | null | undefined;
    jobTitle?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    id?: string | null | undefined;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    city?: string | null | undefined;
    country?: string | null | undefined;
    title?: string | null | undefined;
    companyId?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    emailAddress?: string | null | undefined;
    language?: string | null | undefined;
    jobTitle?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    id?: string | null | undefined;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    city?: string | null | undefined;
    country?: string | null | undefined;
    title?: string | null | undefined;
    companyId?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    emailAddress?: string | null | undefined;
    language?: string | null | undefined;
    jobTitle?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
