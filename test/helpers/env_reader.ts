import 'dotenv/config';

interface EnvReader {
  USER_EMAIL?: string;
  USER_PASSWORD?: string;
}

export const ENV_READER: EnvReader = {
  USER_EMAIL: process.env.USER_EMAIL,
  USER_PASSWORD: process.env.USER_PASSWORD,
};
