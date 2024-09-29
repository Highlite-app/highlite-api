import mongoose from "mongoose";

export const CandidateWorkSchema = new mongoose.Schema({
    id: { type: String },
    userID: { type: String },
    file: [{ type: String }],
    projectTitle: { type: String },
    skills: [{ type: String }],
    tools: [{ type: String }],
    projectDescription: { type: String },
    
})