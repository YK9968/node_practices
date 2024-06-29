import { initMongoConnection } from "./db/initMongoConnection.js";
import { startServer } from "./server.js";

export const bootstrap = async () => {
  await initMongoConnection();
  startServer();
};

bootstrap();