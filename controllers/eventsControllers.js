import ctrlWrapper from "../decorators/ctrlWrapper.js";
import * as eventsServices from "../services/eventsServices.js";

const getAllEvents = async (req, res) => {
  const { page, limit, title, eventDate, organizer } = req.query;
  const skip = (page - 1) * limit;

  const filter = {};

  if (title) {
    filter.title = title;
  }
  if (eventDate) {
    filter.eventDate = eventDate;
  }
  if (organizer) {
    filter.organizer = organizer;
  }

  const { events, eventsQuantity } = await eventsServices.getAllEvents(filter, {
    skip,
    limit,
  });

  const totalPages = Math.ceil(eventsQuantity / limit);

  res.json({ events, totalPages });
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
