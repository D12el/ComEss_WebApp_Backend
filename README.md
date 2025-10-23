# bugcatch-backend

The backend server for the Bug Catch web game. This service exposes the REST API, manages player and game data, and communicates with the MongoDB database.

# Features

REST API: Provides endpoints for managing players and game results (scores).

Data Management: Uses Mongoose to connect to and interact with MongoDB.

Express.js: Minimalist and robust framework for handling routing and middleware.

Lightweight Configuration: Simple setup using environment variables (.env).

# Installation

Clone the repository and install the project dependencies:

Bash
- git clone <repo-url>
- cd bugcatch-backend-main
- npm install

Configuration: Create a .env file to set your PORT and MONGO_URI connection string.

# Usage

Start the server with:

Bash
- npm start

The server will run at:
- http://localhost:3000

Note: The server port (3000 is common) is defined in your .env file.
