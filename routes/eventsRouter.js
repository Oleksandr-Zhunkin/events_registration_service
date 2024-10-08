import express from "express";
import eventsControllers from "../controllers/eventsControllers.js";
import validateBody from "../helpers/validateBody.js";
import { userSchemas } from "../schemas/userSchemas.js";

const validateUser = validateBody(userSchemas);

const eventsRouter = express.Router();

eventsRouter.get("/", eventsControllers.getAllEvents);

eventsRouter.post(
  "/register/:eventId",
  validateUser,
  eventsControllers.registerOnEvent
);

eventsRouter.get("/:eventId", eventsControllers.getEventVisitors);

export default eventsRouter;
