import * as mongoose from 'mongoose';

export const CompanyJobPostSchema = new mongoose.Schema({
  id: { type: String },
  skills: { type: [String] },
  tools: { type: [String] },
  jobFlexibility: { type: String },
  jobDuration: { type: String },
  communication: { type: String },
  salary: { type: String },
  status: { type: String },
  title: { type: String },
  companyId: { type: String },
  jobVideoFeedID: { type: String },
});
