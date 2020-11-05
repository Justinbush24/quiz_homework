//start button starts a timer and calls for first question
const startButton = document.getElementById("start-btn");

let para = document.getElementById("clock");
let clock = 0,
  clear;

document.getElementById("start-btn").addEventListener("click", () => {
  setInterval(valueCount, 1000);
});

function valueCount() {
  clock++;
  para.innerText = clock;
  setNextQuestion();
}

function setNextQuestion() {
  console.log("Next Question");
}
//next button submits answer checks if its correct
//if correct add points to score
//if incorrect do nothing
//calls for next question

// if no question stop timer, tally score, and show results
//store results in local storage and display in console and on screen
