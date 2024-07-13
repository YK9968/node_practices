import express from "express";
import { registerUserController, loginUserController } from "../controllers/auth.js";
import { validateLoginBody } from "../middleware/authValidation.js";

const authRouter = express.Router();

authRouter.post("/register", registerUserController);
authRouter.post("/login", validateLoginBody, loginUserController);

export default authRouter;
