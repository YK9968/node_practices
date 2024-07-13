import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["ADMIN", "MODERATOR", "VISITOR"],
      default: "VISITOR",
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const User = model("users", userSchema);

export default User;
