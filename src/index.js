import { initMongoConnection } from "./db/model/initMongoConnection.js";
import { startServer } from "./server.js";

export const bootstrap = async () => {
  await initMongoConnection();
  startServer();
};
