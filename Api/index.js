const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const knex = require("knex");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "root", //maybe test
    database: "koreez",
  },
});

// get all questions
app.get("/questions", async (req, res) => {
  console.log("api called");
  let questions = [];
  try {
    await db
      .select("*")
      .from("qb_sf")
      .then((data) => {
        console.log("data", data);
        questions = data;
      });
    if (questions.length > 0) {
      res.status(200).json(questions);
    } else {
      res.status(404).json({ message: "no question founnd" });
    }

    console.log("questions", questions);
  } catch (err) {
    console.log("err", err);
    res.status(500).json(err);
  }
});
//get questio by id
app.get("/questions/:id", async (req, res) => {
  console.log("api called");
  const { id } = req?.params;
  let questions = [];
  try {
    await db
      .select("*")
      .from("qb_sf")
      .then((data) => {
        console.log("data", data);
        questions = data;
      });
    if (questions.length > 0) {
      res.status(200).json(questions[id - 1]);
    } else {
      res.status(404).json({ message: "no question founnd" });
    }

    console.log("questions", questions[id - 1]);
  } catch (err) {
    console.log("err", err);
    res.status(500).json(err);
  }
});

app.get("/", (req, res) => {
  res.status(200).send("server working fine");
});

// app.use("/api/stocks", require("./routes/iexApis"));
// app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => {
  console.log("app listening on " + PORT);
});
