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
import { OtpUsageEnum } from '../enums/otp.usage.enum';
export type PincodeDocument = mongoose.HydratedDocument<Pincode>;
export declare class Pincode {
    tokenLifetime: string | number;
    _id: mongoose.Types.ObjectId;
    email: string;
    pin: string;
    usage: OtpUsageEnum;
    creationDate: Date;
    expirationDate: Date;
}
export declare const PincodeSchema: mongoose.Schema<Pincode, mongoose.Model<Pincode, any, any, any, mongoose.Document<unknown, any, Pincode> & Pincode & Required<{
    _id: mongoose.Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Pincode, mongoose.Document<unknown, {}, mongoose.FlatRecord<Pincode>> & mongoose.FlatRecord<Pincode> & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
