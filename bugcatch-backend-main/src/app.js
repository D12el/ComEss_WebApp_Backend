import express from "express";
import cors from "cors";

import PlayerRoute from "./routes/playerRoute.js";
import GameResultRoute from "./routes/gameResultRoute.js";

const app = express();

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow request from other origin (Frontend which is at different port)
app.use(cors());

// use routes
app.use("/players", PlayerRoute);
app.use("/gameresults", GameResultRoute);


export default app;
