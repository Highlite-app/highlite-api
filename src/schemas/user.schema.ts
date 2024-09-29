import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail } from "class-validator";
import { UserTypeEnum } from "src/enums/user.type.enum";

export type UserDocument = User & Document;

@Schema()
export class User {


    @Prop({ required: true,   })
    firstName: string;
    
    @Prop({ required: true,   validators: IsEmail})
    email: string;

    @Prop()
    googleId?: string;

    @Prop()
    twitterId?: string;

    @Prop()
    githubId?: string;

    @Prop()
    facebookId?: string;

    @Prop({
        required: true,
        enum: ['google', 'twitter', 'github', 'facebook', ]
    })
    provider: string;

    @Prop({
        required: true,
        enum: [UserTypeEnum.candidate, UserTypeEnum.company]
    })
    userType: string;
}

export const UserSchema = SchemaFactory.createForClass(User)

