// import packages
const express = require("express");
const cors = require("cors");
const RankHandler = require("./utils/rankHandler.js");
const WordsListHandler = require("./utils/wordsListHandler.js");

// configure port
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//words endpoint : return a randomly selected list consists of 10 obejcts from the worldList 
//minimum requirements are at least one from every Pos.

app.get("/words", (req, res) => {
  const wordsList = WordsListHandler.getRandomWordsList();
  res.json(wordsList);
  res.end();
});


//rank endpoint: takes the final score then return it back in the percentage form.
//it represents the percentage of scores
 
app.post("/rank", (req, res) => {
  const score = req.body.score;

  let rank = RankHandler.getRank(score);

  res.json({ rank: rank });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
