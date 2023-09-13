const mongoose = require("mongoose");
const shortid = require("shortid");

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    unique: [true, "this url has already a shortUrl."],
    required: true,
  },
  shortUrl: {
    type: String,
    unique: [true, "this url has already a shortUrl."],
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("urlModel", urlSchema);
