import Event from "../models/Event.js";
import User from "../models/User.js";

export const getAllEvents = async (filter, settings) => {
  const uniqueEventDates = await Event.aggregate([
    {
      $addFields: {
        eventDate: {
          $dateFromString: {
            dateString: "$eventDate.date",
            format: "%m.%d.%Y",
          },
        },
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$eventDate.date" },
        },
      },
    },
    {
      $project: {
        date: "$_id",
        _id: 0,
      },
    },
  ]);

  const events = await Event.find(filter, null, settings);

  const eventsQuantity = await Event.countDocuments();
  const uniqueTitles = await Event.distinct("title");
  const uniqueOrganizers = await Event.distinct("organizer");

  return {
    events,
    eventsQuantity,
    uniqueTitles,
    uniqueOrganizers,
    uniqueEventDates: uniqueEventDates.map((dateObj) => dateObj.date),
  };
};

export const registerOnEventById = (data) => {
  return User.create(data);
};

export const getVisitorsByEventId = (filter) => {
  return User.find(filter);
};
