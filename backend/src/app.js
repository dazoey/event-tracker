import express from "express";
import cors from "cors";
import eventsRouter from "./routes/events.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/events", eventsRouter);

export default app;
