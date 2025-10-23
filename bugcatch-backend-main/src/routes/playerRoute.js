import express from "express";

import * as playerController from "../controllers/playerController.js";

const router = express.Router();

router.post("/create", playerController.createPlayer);
router.post("/", playerController.getPlayerByName);
router.post("/sethigh", playerController.setNewHigh);
router.post("/setavatar", playerController.setNewAvatar);
router.get("/leaderboard", playerController.getTopPlayers);


export default router;