require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.listen(4000, (error) => {
  error ? console.log(error) : console.log(`The app listening on port ${PORT}`);
});
