const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const TelegramBot = require("node-telegram-bot-api");
// telegram bot = t.me/blogpostapibot.
dotenv.config();
const token = process.env.TELEGRAM_TOKEN;
const app = express();

console.log("telegram bot api", token);

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
