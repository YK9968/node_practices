import express from "express";
import cors from "cors";
import pino from "pino-http";
import { envConfig } from "./utils/env.config.js";
import { productRouter } from "./routes/products.js";
import { errorHandler } from "./middleware/errorHandler.js";
import authRouter from "./routes/auth.js";

export const startServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: "pino-pretty",
      },
    })
  );
  app.use("/products", productRouter);
  app.use("/auth", authRouter);

  app.use(errorHandler);
  const { PORT = 3000 } = envConfig;

  app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`);
  });
};
