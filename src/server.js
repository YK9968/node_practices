import express from "express";
import cors from "cors";
import pino from "pino-http";

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

  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`);
  });
};
