const express = require("express");
const keyWords = express.Router();

const {
    getThroughtComments
} = require("../services/KeyWordService");

keyWords.get("/",  async (req, res) => {
  res.send( getThroughtComments());
});

module.exports = keyWords;