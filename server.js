const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs")
const path = require("path")
const TelegramBot = require("node")

dotenv.config();
const app = express();


const port = process.env.PORT || 3008;

app.use(cors());

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
