const mongoose = require("mongoose");

const keyWordSchema = new mongoose.Schema({
  keyWord: { type: String, required: true },
});


const KeyWord = mongoose.model("KeyWords", keyWordSchema);

module.exports = KeyWord;