let Controller = require("../data/controller");
const adjectiveList = Controller.getAdjectives();
const adverbList = Controller.getAdverbs();
const nounList = Controller.getNouns();
const verbList = Controller.getVerbs();
//here we generate an array of maximum number of 10 objects "Words"
//the while loop helps to get at least one from each category
let arr = [];
module.exports.getRandomWordsList = function getRandomWordsList(len = 10) {
  while (arr.length < len) {
    getNewAdjective();
    if (arr.length >= len) return;
    getNewAdverb();
    if (arr.length >= len) return;
    getNewNoun();
    if (arr.length >= len) return;
    getNewVerb();
  }
  arr.sort((a, b) => {
    let random = "0." + Math.round(new Date().getTime() * Math.random());
    return 0.5 - parseFloat(random);
  });
  return arr;
};

function getNewAdjective() {
  if (adjectiveList.length) {
    arr.push(adjectiveList[0]);
    adjectiveList.shift();
  }
  return;
}

function getNewAdverb() {
  if (adverbList.length) {
    arr.push(adverbList[0]);
    adverbList.shift();
  }
  return;
}
function getNewNoun() {
  if (nounList.length) {
    arr.push(nounList[0]);
    nounList.shift();
  }
  return;
}

function getNewVerb() {
  if (verbList.length) {
    arr.push(verbList[0]);
    verbList.shift();
  }
  return;
}
