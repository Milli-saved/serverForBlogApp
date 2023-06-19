const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3008;
const token = process.env.TELEGRAM_TOKEN;

const api = new TelegramBot(token, { polling: true });

let blogs = [
  {
    id: 1,
    postTitle: "እውነቱን ማወቅ፣ ግን.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Tenkir Teni",
    postDate: "on July 8, 2023",
  },
  {
    id: 2,
    postTitle: "ልብ መግዛት.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Tenkir Teni",
    postDate: "on July 8, 2023",
  },
  {
    id: 3,
    postTitle: "መልካም እድል.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Tenkir Teni",
    postDate: "on July 8, 2023",
  },
  {
    id: 4,
    postTitle: "ቁጣህን ተቆጣጠር.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Tenkir Teni",
    postDate: "on July 8, 2023",
  },
  {
    id: 5,
    postTitle: "እምነት.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Tenkir Teni",
    postDate: "on July 8, 2023",
  },
  {
    id: 6,
    postTitle: "የተመሰቃቀለ ህይወት.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Tenkir Teni",
    postDate: "on July 8, 2023",
  },
  {
    id: 7,
    postTitle: "የበረዶ ግግር ጫፍ.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Tenkir Teni",
    postDate: "on July 8, 2023",
  },
  {
    id: 8,
    postTitle: "መተውን ተማሩ.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Tenkir Teni",
    postDate: "on July 8, 2023",
  },
  {
    id: 9,
    postTitle: "ቃልህን ጠብቅ.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Tenkir Teni",
    postDate: "on July 8, 2023",
  },
  {
    id: 10,
    postTitle: "በጨዎነት መልሱ.",
    postSubtitle:
      "This is the subtitle which contains the best part of the blog.",
    postedBy: "Tenkir Teni",
    postDate: "on July 8, 2023",
  },
];

let newlyAddedFile = "";

api.on("audio", async (msg) => {
  try {
    const chatId = msg.chat.id;
    const audioFile = await api.getFile(msg.audio.file_id);
    const filePath = await api.downloadFile(audioFile.file_id, "./audio");
    fs.renameSync(`${filePath}`, `./audio/${msg.audio.file_name}`);
    newlyAddedFile = `${msg.audio.file_name}`;
    return api.sendMessage(chatId, "File recieved");
  } catch (err) {
    console.log("Some error occured: ", err);
  }
});

app.get("/audio", (req, res) => {
  // console.log("The new file: ", newlyAddedFile);
  if (!newlyAddedFile) {
    
  }
  const audioBuffer = fs.readFileSync(`./audio/${newlyAddedFile}`);
  res.set("Content-Type", "audio/mpeg");
  res.send(audioBuffer);
});

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
