import * as eventsServices from "../services/eventsServices.js";

const getAllEvents = async (req, res) => {
  const result = await eventsServices.getAllEvents();

  res.json(result);
};

export default {
  getAllEvents: getAllEvents,
};
