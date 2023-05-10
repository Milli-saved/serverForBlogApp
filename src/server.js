const express = requrie("express");
const cors = require("cors");
const TelegramBot = require("telegram-bot-api");

const app = express();

app.use(cors());
// must install telegram-bot-api, cors, bcrypt, dotenv, express-async-handler, jsonwebtoken, mongoose,
// devdependencies nodemon
const api = new TelegramBot({ token: "My token from bot father" });

api.on("message", (message) => {
  console.log("received messages", message);
});

app.listen(3000, () => {
  console.log("Port started at 3000");
});
