import ctrlWrapper from "../decorators/ctrlWrapper.js";
import * as eventsServices from "../services/eventsServices.js";

const getAllEvents = async (req, res) => {
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;

  const result = await eventsServices.getAllEvents({ skip, limit });

  res.json(result);
};

const registerOnEvent = async (req, res) => {
  const { eventId } = req.params;

  const result = await eventsServices.registerOnEventById({
    ...req.body,
    eventId,
  });

  res.status(201).json(result);
};

const getEventVisitors = async (req, res) => {
  const { eventId } = req.params;

  const result = await eventsServices.getVisitorsByEventId({ eventId });

  res.json(result);
};

export default {
  getAllEvents: ctrlWrapper(getAllEvents),
  registerOnEvent: ctrlWrapper(registerOnEvent),
  getEventVisitors: ctrlWrapper(getEventVisitors),
};
