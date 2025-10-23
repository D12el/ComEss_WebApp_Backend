import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    playerId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatarId: {
        type: Number,
        required: true,
    },
    highestScore: {
      type: Number,
      required: true,
  },

  });
  
  const Player = mongoose.model("Player", playerSchema);
  
  export default Player;