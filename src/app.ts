import * as express from "express";
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
