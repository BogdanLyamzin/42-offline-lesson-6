const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

const { authorsApi } = require("./api");

const app = express();

app.use(cors());

app.use("/authors", authorsApi);

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const port = PORT || 3000;
    app.listen(port);
  })
  .catch((error) => console.log(error));
