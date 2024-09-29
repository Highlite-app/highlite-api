import * as mongoose from 'mongoose';

export const CompanyJobPostVideoFeedSchema = new mongoose.Schema({
  id: String,
  playbackId: String,
  thumbNailHeight: Number,
  thumbNailWidth: Number,
  assetId: String,
  uploadId: String,
  jobStatus: String,
  companyId: String,
});


