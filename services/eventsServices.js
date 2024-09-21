import Event from "../models/Event.js";

export const getAllEvents = () => {
  return Event.find();
};
