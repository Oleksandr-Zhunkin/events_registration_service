import Event from "../models/Event.js";
import User from "../models/User.js";

export const getAllEvents = async (settings) => {
  const events = await Event.find(null, null, settings);
  const eventsQuantity = await Event.countDocuments();
  return { events, eventsQuantity };
};

export const registerOnEventById = (data) => {
  return User.create(data);
};

export const getVisitorsByEventId = (filter) => {
  return User.find(filter);
};
