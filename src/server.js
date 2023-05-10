const TelegramBot = require("telegram-bot-api");

const api = new TelegramBot({ token: "My token from bot father" });

api.on("message", (message) => {
  console.log("received messages", message);
});
