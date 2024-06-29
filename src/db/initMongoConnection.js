import mongoose from "mongoose";

import { envConfig } from "../utils/env.config.js";

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = envConfig;

export const initMongoConnection = async () => {
  try {
    const DB_HOST = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;

    await mongoose.connect(DB_HOST);

    console.log("Mongo connection successfully established!");
  } catch (error) {
    console.log("Error while setting up mongo connection", error);
    throw error;
  }
};

