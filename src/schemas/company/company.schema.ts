import * as mongoose from 'mongoose';

export const CompanyDetailsSchema = new mongoose.Schema({
  id: { type: String },
  companyId: { type: String },
  firstName: { type: String },
  phoneNumber: { type: String },
  emailAddress: { type: String },
  language: { type: String },
  lastName: { type: String },
  title: { type: String },
  city: { type: String },
  country: { type: String },
  jobTitle: { type: String },
});
