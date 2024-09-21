import Joi from "joi";
import { emailRegexp, fromSource } from "../constants/userConstants.js";

export const userSchemas = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  dayOfBirth: Joi.string().required(),
  source: Joi.string().valid(...fromSource),
});
