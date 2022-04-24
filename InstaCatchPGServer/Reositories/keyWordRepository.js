const KeyWord = require("../models/keyWords");

const isKeyWordExists = async (searchedWord) => {
  return await  KeyWord.exists({KeyWord:searchedWord});
};


module.exports = {
    isKeyWordExists
};