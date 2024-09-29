import * as dotenv from 'dotenv';
dotenv.config();

export const jwtConfig = {
  secret: process.env.JWT_SECRET,
  signOptions: {
    expiresIn:
      process.env.JWT_EXPIRES_IN_SEC != undefined
        ? process.env.JWT_EXPIRES_IN_SEC + 's'
        : '259200s',
  },
};
