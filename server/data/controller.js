const fs = require("fs");

// reading data from TestData.json
let res = fs.readFileSync("data/TestData.json");
data = JSON.parse(res);

// fetching scores
module.exports.getScores = function getScores() {
  return data.scoresList;
};

// words Pos
const wordsPos = {
  adjective: [],
  adverb: [],
  noun: [],
  verb: [],
};

// shuffling the Words in wordsList
function Randomizing(wordsList) {
  wordsList.sort((a, b) => {
    let random = "0." + Math.round(new Date().getTime() * Math.random());
    return 0.5 - parseFloat(random);
  });

  return wordsList;
}

// Categorizing the Words
function categorizing(wordList) {
  for (let i = 0; i < wordList.length; i++) {
    let category = wordList[i].pos;
    wordsPos[category].push(wordList[i]);
  }
}

// prepare words to be used in fetching
let wordsList = data.wordsList;

Randomizing(wordsList);
categorizing(wordsList);

module.exports.getAdjectives = function getAdjectives() {
  return wordsPos["adjective"];
};

module.exports.getAdverbs = function getAdverbs() {
  return wordsPos["adverb"];
};

module.exports.getNouns = function getNouns() {
  return wordsPos["noun"];
};

module.exports.getVerbs = function getVerbs() {
  return wordsPos["verb"];
};
