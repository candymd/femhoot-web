const questions = [
    {
        question: "Pregunta número 1?",
        checkboxOne: {
            text: "Respuesta 1a",
            id: 1,
        },
        checkboxTwo: {
            text: "Respuesta 1b",
            id: 2,
        },
        checkboxThree: {
            text: "Respuesta 1c correcta",
            id: 3,
        },
        solution: 3,
    },
    {
        question: "Pregunta número 2?",
        checkboxOne: {
            text: "Respuesta 2a",
            id: 1,
        },
        checkboxTwo: {
            text: "Respuesta 2b correcta",
            id: 2,
        },
        checkboxThree: {
            text: "Respuesta 2c",
            id: 3,
        },
        solution: 2,
    },
];
let questionIndex;
let quizPunctuation = [];

//Getting DOM elements
const beforeQuizSection = document.querySelector("#before-quiz-section");
const quizSection = document.querySelector("#quiz-section");
const afterQuizSection = document.querySelector("#after-quiz-section");

const questionText = document.querySelector("#question-text");
const answerOneButton = document.querySelector("#answer-1");
const answerTwoButton = document.querySelector("#answer-2");
const answerThreeButton = document.querySelector("#answer-3");

const correctAnswers = document.querySelector("#correct-answers");
const quizScoreCounter = document.querySelector("#quiz-score-counter");
const userScoreCounter = document.querySelector("#user-score-counter");

////Start quiz button
function startQuizBtnHandleClick(event) {
    event.preventDefault();
    const question = startQuiz();

    questionText.innerHTML = question.question;
    answerOneButton.innerHTML = question.checkboxOne.text;
    answerTwoButton.innerHTML = question.checkboxTwo.text;
    answerThreeButton.innerHTML = question.checkboxThree.text;

    beforeQuizSection.classList.add("display-none");
    quizSection.classList.remove("display-none");
}

////Submit answer button
function answerHandleClick(event) {
    event.preventDefault();
    const question = questions[questionIndex];

    //counter
    checkAnswers(+event.target.value, question.solution);

    //feedback for user
    if (question.checkboxOne.id === question.solution) {
        answerOneButton.style.backgroundColor = "green";
    } else {
        answerOneButton.style.backgroundColor = "red";
    }
    if (question.checkboxTwo.id === question.solution) {
        answerTwoButton.style.backgroundColor = "green";
    } else {
        answerTwoButton.style.backgroundColor = "red";
    }
    if (question.checkboxThree.id === question.solution) {
        answerThreeButton.style.backgroundColor = "green";
    } else {
        answerThreeButton.style.backgroundColor = "red";
    }
}

////Next question button
function nextQuestionBtnHandleClick(event) {
    event.preventDefault();
    const question = newQuestionGenerator();
    if (question) {
        questionText.innerHTML = question.question;

        answerOneButton.innerHTML = question.checkboxOne.text;
        answerOneButton.style.backgroundColor = "white";

        answerTwoButton.innerHTML = question.checkboxTwo.text;
        answerTwoButton.style.backgroundColor = "white";

        answerThreeButton.innerHTML = question.checkboxThree.text;
        answerThreeButton.style.backgroundColor = "white";
    } else {
        quizSection.classList.add("display-none");
        afterQuizSection.classList.remove("display-none");
        correctAnswers.innerHTML = `${calculateCorrectAnswers()} / ${
            quizPunctuation.length
        }`;
        quizScoreCounter.innerHTML = `${calculateQuizScore()}`;
        userScoreCounter.innerHTML = `${calculateUserScore()}`;
    }
}

//Funciones auxiliares
function startQuiz() {
    questionIndex = 0;
    quizPunctuation = [];
    return questions[questionIndex];
}

function newQuestionGenerator() {
    if (questionIndex < questions.length) {
        questionIndex++;
        return questions[questionIndex];
    } else {
        return null;
    }
}

function checkAnswers(answer, solution) {
    if (answer === solution) {
        quizPunctuation.push(1);
    } else {
        quizPunctuation.push(0);
    }
}

function calculateCorrectAnswers() {
    let correctAnswers = 0;
    quizPunctuation.forEach((i) => {
        if (i === 1) correctAnswers++;
    });
    return correctAnswers;
}

function calculateQuizScore() {
    return calculateCorrectAnswers() * 100;
}

function calculateUserScore() {
    return +sessionStorage.getItem("score") + calculateQuizScore();
}
