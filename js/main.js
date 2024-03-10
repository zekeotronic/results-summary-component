const score = document.getElementById('score');
const message = document.getElementById('message');
const percent = document.getElementById('percent');
const reaction = document.getElementById('reaction');
const memory = document.getElementById('memory');
const verbal = document.getElementById('verbal');
const visual = document.getElementById('visual');

function isBetween(num, lower, upper) {
  if (num >= lower && num <= upper) {
    return true;
  } else {
    return false;
  }
}

function generateScores() {
  const reactionScore = Math.floor(Math.random() * 100);
  const memoryScore = Math.floor(Math.random() * 100);
  const verbalScore = Math.floor(Math.random() * 100);
  const visualScore = Math.floor(Math.random() * 100);
  return [reactionScore, memoryScore, verbalScore, visualScore];
}

function calculateAverage(scores) {
  const total = scores.reduce((acc, score) => acc + score, 0);
  return Math.floor(total / scores.length);
}

function generateMessage(average) {
  let message = '';
  if (isBetween(average, 0, 20)) {
    message = 'Yikes';
  } else if (isBetween(average, 21, 40)) {
    message = 'Bad';
  } else if (isBetween(average, 41, 60)) {
    message = 'Good';
  } else if (isBetween(average, 61, 80)) {
    message = 'Great';
  } else {
    message = 'Excellent';
  }
  return message;
}

function generatePercent(average) {
  let percent = '';
  if (isBetween(average, 0, 20)) {
    percent = '5';
  } else if (isBetween(average, 21, 40)) {
    percent = '20';
  } else if (isBetween(average, 41, 60)) {
    percent = '40';
  } else if (isBetween(average, 61, 80)) {
    percent = '75';
  } else {
    percent = '90';
  }
  return percent;
}


function displayScores() {
  let scores = generateScores();
  let average = calculateAverage(scores);
  let messageText = generateMessage(average);
  let percentText = generatePercent(average);
  reaction.textContent = `Reaction: ${scores[0]}`;
  memory.textContent = `Memory: ${scores[1]}`;
  verbal.textContent = `Verbal: ${scores[2]}`;
  visual.textContent = `Visual: ${scores[3]}`;
  score.textContent = average;
  message.textContent = messageText;
  percent.textContent = percentText;
}

displayScores();