const express = require("express");
const cors = require("cors");
const TelegramBot = require("node-telegram-bot-api");
// telegram bot = t.me/blogpostapibot.
const token = "6026137775:AAF1bSXURKa8vmng_r8lLaO0KntBb3GrI34";
const app = express();

app.use(cors());
const api = new TelegramBot(token, {
  polling: true,
});
api.on("message", (message) => {
  console.log("received messages", message);
});

app.listen(3000, () => {
  console.log("Port started at 3000");
});
