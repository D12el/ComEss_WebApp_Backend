import Player from "../models/playerModel.js";

export const createPlayer = async (req, res) => {
    try {
        // Just for debugging purpose
        console.log(req.body);

        // Create new player model
        const newPlayer = new Player(req.body);

        // Save playerData to the database
        await newPlayer.save();

        // Return success message response
        res.status(200).json({ message: "Success" });
    }
    catch (err){
        console.log(err);
        // Error handlers
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
          } else {
            res.status(500).json({ error: "Internal server error" });
          }
    }
};

export const setNewAvatar = async (req, res) => {
  try {
   Player.findOneAndUpdate(
    { name: req.body.name },
    { $set: { avatarId: req.body.avatarId } },
    { returnOriginal: false }
    ).then(updatedPlayer => {
        console.log("Player avatar updated successfully:", updatedPlayer);
    })
    .catch(error => {
        console.error("Error updating player:", error);
    });

      // Return success message response
      res.status(200).json({ message: "Success" });
  }

  catch (err){
      console.log(err);
      // Error handlers
      if (err.name === "ValidationError") {
          res.status(400).json({ error: "Bad Request" });
        } else {
          res.status(500).json({ error: "Internal server error" });
        }
  }
};



export const setNewHigh = async (req, res) => {
  try {
   Player.findOneAndUpdate(
    { name: req.body.name },
    { $set: { highestScore: req.body.newHigh } },
    { returnOriginal: false }
    ).then(updatedPlayer => {
        console.log("Player updated successfully:", updatedPlayer);
    })
    .catch(error => {
        console.error("Error updating player:", error);
    });

      // Return success message response
      res.status(200).json({ message: "Success" });
  }

  catch (err){
      console.log(err);
      // Error handlers
      if (err.name === "ValidationError") {
          res.status(400).json({ error: "Bad Request" });
        } else {
          res.status(500).json({ error: "Internal server error" });
        }
  }
};

export const getPlayerByName = async (req, res) => {
    try {
        const nameQuery = req.body.name;
        const result = await Player.find({name: nameQuery});
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        // Error handlers
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
          } else {
            res.status(500).json({ error: "Internal server error" });
          }
    }
}



export const getTopPlayers = async (req, res) => {
  try {
    const topPlayers = await Player.aggregate([{ $sort: { highestScore: -1 } }, { $limit: 20 }]);
    res.status(200).json(topPlayers);
  }
  catch (err) {
      console.log(err);
      // Error handlers
      if (err.name === "ValidationError") {
          res.status(400).json({ error: "Bad Request" });
        } else {
          res.status(500).json({ error: "Internal server error" });
        }
  }
}






