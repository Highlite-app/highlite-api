import * as dotenv from 'dotenv';
dotenv.config();

export const googleStrategyConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
};
