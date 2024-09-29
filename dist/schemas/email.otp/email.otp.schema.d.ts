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
import * as mongoose from 'mongoose';
import { UserTypeEnum } from 'src/enums/user.type.enum';
export declare class EmailOtpSchema extends Document {
    email: string;
    otp: string;
    userType: UserTypeEnum;
    timestamp: Date;
}
export declare const EmailOtpSchemaFactory: mongoose.Schema<EmailOtpSchema, mongoose.Model<EmailOtpSchema, any, any, any, Document<unknown, any, EmailOtpSchema> & EmailOtpSchema & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, EmailOtpSchema, Document<unknown, {}, mongoose.FlatRecord<EmailOtpSchema>> & mongoose.FlatRecord<EmailOtpSchema> & {
    _id: mongoose.Types.ObjectId;
}>;
