# quiz_homework

const startingMinutes = 3;

let time = startingMinutes \* 60;

const clockEl = document.getElementById("clock");

function startTimer() {

    setInterval(startTimer, 1000);
    const minutes = Math.floor(time / 60);
    let seconds = minutes % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds


    clockEl.innerHTML = `${minutes}: ${seconds}` ;

    time--;

    console.log("Timer started")

}

document.getElementById("start-btn").addEventListener("click", startTimer);
