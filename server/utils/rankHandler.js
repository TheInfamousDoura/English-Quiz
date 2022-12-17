const Controller = require("../data/controller.js");
const scoresList = Controller.getScores();

//here we calculate the user rank given his score (score) in the percentage form.
module.exports.getRank = function getRank(score) {
  let lowerScores = scoresList.filter((item) => item < score);

  let rank = ((lowerScores.length / scoresList.length) * 100).toFixed(2);

  return rank;
};
