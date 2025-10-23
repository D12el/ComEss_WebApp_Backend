import GameResult from "../models/gameResultModel.js";


export const createGameResult = async (req, res) => {
    try {
        // Just for debugging purpose
        console.log(req.body);

        // Create new GameResult model
        const newGameResult = new GameResult(req.body);

        // Save gameResult data to the database
        await newGameResult.save();

        // Return success message response
        res.status(200).json({ message: "Success" });
    }
    catch (err){
        // Error handlers
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
          } else {
            res.status(500).json({ error: "Internal server error" });
          }
    }
};



