const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const TelegramBot = require("node-telegram-bot-api");

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3008;
const token = "6026137775:AAF1bSXURKa8vmng_r8lLaO0KntBb3GrI34";

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
  const chatId = msg.chat.id;
  try {
    const audioFile = await api.getFile(msg.audio.file_id);
    const filePath = await api.downloadFile(audioFile.file_id, "./audio");
    fs.renameSync(`${filePath}`, `./audio/${msg.audio.file_name}`);
    newlyAddedFile = `${msg.audio.file_name}`;
    return api.sendMessage(chatId, "File recieved");
  } catch (err) {
    return api.sendMessage(chatId, "Not recived.");
  }
});

app.get("/audio", (req, res) => {
  console.log("The new file: ", newlyAddedFile);
  if (!newlyAddedFile) {
    res.status(400).json({ msg: "no new audio added." });
  }
  const audioBuffer = fs.readFileSync(`./audio/${newlyAddedFile}`);
  res.set("Content-Type", "audio/mpeg");
  res.send(audioBuffer);
  // res.status(200).json({
  //   msg: "the link is this one.",
  // });
});

app.get("/audio/all", (req, res) => {
  const zipFilePath = path.join(__dirname, "../", "audio.zip");

  if (fs.existsSync("audio.zip")) {
    fs.unlink("audio.zip", (err) => {
      if (err) {
        console.error(err);
      }
      console.log("File deleted.");
    });
  } else {
    const output = fs.createWriteStream("audio.zip");
    const archive = archiver("zip");
    output.on("close", () => console.log("ZIP archive created"));
    archive.pipe(output);

    fs.readdirSync("audio/").forEach((file) => {
      const filePath = path.join("audio/", file);
      if (fs.statSync(filePath).isFile() && path.extname(filePath) === ".mp3") {
        archive.append(fs.createReadStream(filePath), { name: file });
      }
    });
    archive.finalize();
    res.set("Content-Type", "application/zip");
    res.download("audio.zip");
  }

  // if (zipFilePath.ex) {
  //   console.log("IN THE IF", zipFilePath);
  //   res.set("Content-Type", "application/zip");
  //   res.download("audio.zip");
  // } else {
  //   console.log("IN THE ELSE");
  //   const output = fs.createWriteStream("audio.zip");
  //   const archive = archiver("zip");
  //   output.on("close", () => console.log("ZIP archive created"));
  //   archive.pipe(output);

  //   fs.readdirSync("audio/").forEach((file) => {
  //     const filePath = path.join("audio/", file);
  //     if (fs.statSync(filePath).isFile() && path.extname(filePath) === ".mp3") {
  //       archive.append(fs.createReadStream(filePath), { name: file });
  //     }
  //   });
  //   archive.finalize();
  //   res.set("Content-Type", "application/zip");
  //   res.download("audio.zip");
  // }
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
