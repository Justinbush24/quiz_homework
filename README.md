
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
