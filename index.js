require("dotenv").config();
const express = require("express");
const app = express();
const meteorsRouter = require("./src/routers/meteorsRouter");

const PORT = process.env.PORT;

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  
  next();
});

app.use(express.json());

app.use("/meteors", meteorsRouter);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`The app listening on port ${PORT}`);
});
