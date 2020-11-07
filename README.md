
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







function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    });
}
