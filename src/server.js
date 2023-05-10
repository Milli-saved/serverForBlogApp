const TelegramBot = require("telegram-bot-api");


// must install telegram-bot-api, cors, bcrypt, dotenv, express-async-handler, jsonwebtoken, mongoose,
// devdependencies nodemon
const api = new TelegramBot({ token: "My token from bot father" });

api.on("message", (message) => {
  console.log("received messages", message);
});
