import User from "../db/model/User.js";
import createHttpError from "http-errors";
import bcrypt from 'bcrypt';
import sessionSchema from '../db/model/Session.js';
import Session from "../db/model/Session.js";
import { randomBytes } from 'node:crypto';

export const registerUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      throw createHttpError(409, "Email in use");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ ...req.body, password: hashedPassword });

    res.status(201).json({
      status: 201,
      message: "Success register user",
      data: {
        _id: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw createHttpError(400, "Email or password is wrong!");
    }
    const isPasswordCompare = await bcrypt.compare(password, user.password);
    if (!isPasswordCompare) {
      throw createHttpError(400, "Email or password is wrong!");
    }

    await Session.deleteOne({userId: user._id });
    const accessToken = randomBytes(30).toString("base64");
    const refreshToken = randomBytes(30).toString("base64");
    
    const accessTokenValidUntil = new Date(Date.now() + (15 * 60 * 1000));
    const refreshTokenValidUntil = new Date(Date.now() + (30 * 24 * 3600 * 1000));
    
    await Session.create({
        userId: user._id,
        accessToken,
        refreshToken,
        accessTokenValidUntil,
        refreshTokenValidUntil,
    });
        
    res.status(200).json({
        status: 200,
        message: "Successfully logged in a user!",
        data: {
          user: {
            _id: user._id,
            email: user.email,
            role: user.role, 
          },                 
            accessToken,
            refreshToken,
          }
    });

  } catch (error) {
    next(error);
  }
};