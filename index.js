const express = require("express");
const fetch = require("node-fetch");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const port = process.env.port || 4000;

app.get("/", async (req, res) => {
  const url = "https://www.freetogame.com/api/games";
  try {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => res.send(data));
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log("listening to port", port);
});