import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({collection: "company_onboarding"})
export default class CompanyDetails extends Document {
  @Prop()
  companyId: string;

  @Prop()
  companyName: string;

  @Prop()
  industry: string;

  @Prop()
  city: string;

  @Prop()
  country: string;

  @Prop()
  website: string;

  @Prop()
  companySize: string;

  @Prop()
  benefits: [string];

  @Prop()
  about: string;

  @Prop()
  email:string

  @Prop()
  userName: string;


  @Prop()
  companyLogo: string;
}

export const CompanyDetailsSchemas = SchemaFactory.createForClass(CompanyDetails);
