import { Schema, model } from "mongoose";
import { emailRegexp, fromSource } from "../constants/userConstants.js";
import { handleSaveError, setUpdateOptions } from "./hooks.js";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
    },
    dayOfBirth: {
      type: Date,
      required: true,
    },
    source: {
      type: String,
      enum: fromSource,
      required: true,
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "event",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveError);

userSchema.pre("findOneAndUpdate", setUpdateOptions);

userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;
