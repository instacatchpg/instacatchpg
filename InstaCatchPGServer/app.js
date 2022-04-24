const express = require("express");
const cors = require("cors");
require("./db/dbConnection");

const KeyWordConroller = require("./controllers/KeyWordConroller");

const app = express();

app.use(cors());

const port = 3000;

app.use(express.json());

app.use("/keyWord", KeyWordConroller);

app.listen(port, () => console.log(`Server is listening on port ${port}`));