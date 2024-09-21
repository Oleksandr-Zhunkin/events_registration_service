import ctrlWrapper from "../decorators/ctrlWrapper.js";
import * as eventsServices from "../services/eventsServices.js";

const getAllEvents = async (req, res) => {
  const result = await eventsServices.getAllEvents();

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

export default {
  getAllEvents: ctrlWrapper(getAllEvents),
  registerOnEvent: ctrlWrapper(registerOnEvent),
};
