import mongoose from "mongoose";

const gameResultSchema = new mongoose.Schema({
    gameId: {
      type: Number,
      required: true,
    },
    playerId: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },
});

const gameResult = mongoose.model("GameResult", gameResultSchema);

export default gameResult;

