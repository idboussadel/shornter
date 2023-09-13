const express = require("express");
const mongoose = require("mongoose");
const shortId = require("shortid");
const morgan = require("morgan");
const urlModel = require("./models/urlModel");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: "true",
  useUnifiedTopology: "true",
});

app.get("/", (req, res) => {
  urlModel.find().then((urls) => {
    res.render("index", { urls: urls });
  });
});

app.post("/url", async (req, res) => {
  const shortUrl = shortId.generate();

  const url = new urlModel({
    url: req.body.fullUrl,
    shortUrl: shortUrl,
    clicks: 0,
  });

  await url.save();

  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const Url = await urlModel.findOne({ shortUrl: req.params.shortUrl });
  if (Url == null) return res.sendStatus(404);

  Url.clicks++;
  await Url.save();

  res.redirect("http://" + Url.url);
});

app.listen(port, () => {
  console.log(`the server is running on the port ${port}.`);
});
