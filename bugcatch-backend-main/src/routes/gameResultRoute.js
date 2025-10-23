import express from "express";

import * as gameResultController from "../controllers/gameResultController.js";

const router = express.Router();


router.post("/create", gameResultController.createGameResult);



export default router;

