import Event from "../models/Event.js";
import User from "../models/User.js";

export const getAllEvents = (settings) => {
  return Event.find(null, null, settings);
};

export const registerOnEventById = (data) => {
  return User.create(data);
};

export const getVisitorsByEventId = (filter) => {
  return User.find(filter);
};
