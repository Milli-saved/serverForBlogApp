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
    postTitle: "እውነቱን ማወቅ፣ ግን.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 2,
    postTitle: "ልብ መግዛት.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 3,
    postTitle: "መልካም እድል.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 4,
    postTitle: "ቁጣህን ተቆጣጠር.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 5,
    postTitle: "እምነት.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 6,
    postTitle: "የተመሰቃቀለ ህይወት.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 7,
    postTitle: "የበረዶ ግግር ጫፍ.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 8,
    postTitle: "መተውን ተማሩ.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 9,
    postTitle: "ቃልህን ጠብቅ.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Akrem Hussen",
    postDate: "on July 8, 2023",
  },
  {
    id: 10,
    postTitle: "በጨዎነት መልሱ.",
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
  let blogIndex = blogs.findIndex((eachBlog) => eachBlog.id == id);
  res.status(200).json(blogs[blogIndex]);
});

app.listen(port, () => {
  console.log(`Port started at ${port}`);
});
