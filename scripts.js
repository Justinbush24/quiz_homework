const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

// event listener for start game button and next buttons to start game and set the next question
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
        currentQuestionIndex++
        setNextQuestion()
    })
    // start game function hides start button and shuffles question array and sets first question
function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

// next question function resets state of next button and selects random question from array
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// 
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
    })
}


function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')

    }
}



function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const questions = [{
        question: 'Which of the following is not JavaScript Data Types?',
        answers: [{
                text: 'Float',
                correct: true
            },
            {
                text: 'Undefined',
                correct: false
            },
            {
                text: 'Number',
                correct: false
            },
            {
                text: 'Boolean',
                correct: false
            }
        ]
    },
    {
        question: 'Which company developed JavaScript?',
        answers: [{
                text: 'Netscape',
                correct: true
            },
            {
                text: 'Bell Labs',
                correct: false
            },
            {
                text: 'Sun Microsystems',
                correct: false
            },
            {
                text: 'IBM',
                correct: false
            }
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [{
                text: '<head>',
                correct: false
            },
            {
                text: '<script>',
                correct: true
            },
            {
                text: '<meta>',
                correct: false
            },
            {
                text: '<style>',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following is correct about features of JavaScript?',
        answers: [{
                text: 'It can not Handling dates and time.',
                correct: false
            },
            {
                text: 'JavaScript is a object-based scripting language.',
                correct: true
            },
            {
                text: 'JavaScript is not interpreter based scripting language.',
                correct: false
            },
            {
                text: 'All of the above',
                correct: false
            }
        ]
    }
]