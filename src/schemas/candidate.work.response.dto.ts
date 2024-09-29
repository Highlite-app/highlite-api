import mongoose from "mongoose";
import { CandidateWorkSchema } from "./candidate.work.schema";

export const CandidateWorkResponseSchema =  new mongoose.Schema({
    items:[{type:CandidateWorkSchema}]
})