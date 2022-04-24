const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/local", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;