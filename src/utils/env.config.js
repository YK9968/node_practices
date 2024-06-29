import dotenv from "dotenv";

dotenv.config();

export const envConfig = {
  PORT: process.env.PORT,
  MONGODB_USER: process.env.MONGODB_USER,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  MONGODB_URL: process.env.MONGODB_URL,
  MONGODB_DB: process.env.MONGODB_DB,
};
