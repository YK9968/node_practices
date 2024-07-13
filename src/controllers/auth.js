import User from "../db/model/User.js";
import createHttpError from "http-errors";

export const registerUserController = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw createHttpError(409, "Email in use");
    }
    const data = await User.create(req.body);

    res.status(201).json({
      status: 201,
      message: "Success registr user",
      data,
    });
  } catch (error) {
    next(error);
  }
};
