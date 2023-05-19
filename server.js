const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
// const dotenv = require("dotenv");
// const TelegramBot = require("node-telegram-bot-api");
// telegram bot = t.me/blogpostapibot.
// const token = process.env.TELEGRAM_TOKEN;
const app = express();

const port = process.env.PORT || 3008;

app.use(cors());

let blogs = [
  {
    id: 1,
    postTitle: "This is the title.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 2,
    postTitle: "This is the title.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 3,
    postTitle: "This is the title.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 4,
    postTitle: "This is the title.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 5,
    postTitle: "This is the title.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 6,
    postTitle: "This is the title.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
];

// console.log("telegram bot api", token);

// const api = new TelegramBot(token, { polling: true });

// api.onText(/\/exho(.+)/, (msg, match) => {
//   const chatId = msg.chat.id;
//   const resp = match[1];

//   api.sendMessage(chatId, resp);
// });

// api.on("message", (message) => {
//   console.log("received messages", message);
// });

app.get("/all", (req, res) => {
  res.status(200).json(blogs);
});

app.get("/:id", (req, res) => {
  let id = req.params.id;
  let selectedBlog = blogs.map((eachBlog) => {
    if (eachBlog.id === id) {
      return eachBlog;
    }
  });
  res.status(200).json(selectedBlog);
});

app.listen(port, () => {
  console.log(`Port started at ${port}`);
});
