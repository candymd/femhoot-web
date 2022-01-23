const questions = [
    {
        question:
            "What field of environmental work has Jane Goodall dedicated her life to?",
        checkboxOne: {
            text: "To the study of primates in Tanzania",
            id: 1,
        },
        checkboxTwo: {
            text: "To the study of climate change",
            id: 2,
        },
        checkboxThree: {
            text: "To the study of African predators",
            id: 3,
        },
        solution: 1,
    },
    {
        question:
            "This woman studied Maths secretly and corresponded with the most relevant researchers of her time, always under a pseudonym. We are talking about...",
        checkboxOne: {
            text: "Ada Lovelace",
            id: 1,
        },
        checkboxTwo: {
            text: "Lucretia Mott",
            id: 2,
        },
        checkboxThree: {
            text: "Sophie Germain",
            id: 3,
        },
        solution: 3,
    },
    {
        question:
            "Which famous scientist wrote: 'Bacteria were the inventors, on a reduced scale, of all the chemical systems essential for life'?",
        checkboxOne: {
            text: "Gertrude B. Elion",
            id: 1,
        },
        checkboxTwo: {
            text: "Lynn Margulis",
            id: 2,
        },
        checkboxThree: {
            text: "Mary Leakey",
            id: 3,
        },
        solution: 2,
    },
    {
        question:
            "What were Katherine Johnson, Dorothy Vaughan and Mary Jackson famous for?",
        checkboxOne: {
            text: "They invented a communication system based on ones and zeros",
            id: 1,
        },
        checkboxTwo: {
            text: "They made it possible for man to land on the Moon",
            id: 2,
        },
        checkboxThree: {
            text: "They were the first women in history to set foot in a university",
            id: 3,
        },
        solution: 2,
    },
    {
        question: "What was Rosalind Franklin famous for?",
        checkboxOne: {
            text: "He discovered that the DNA molecule existed in a helical conformation",
            id: 1,
        },
        checkboxTwo: {
            text: "He was part of the team that discovered nuclear fission",
            id: 2,
        },
        checkboxThree: {
            text: "Contributed to the technology that led to the development of the atomic bomb",
            id: 3,
        },
        solution: 1,
    },
    {
        question:
            "This woman was invited to work on the Manhattan Project (1942–1955) in the United States. However, he opposed the atomic bomb and rejected the offer. Who are we talking about?",
        checkboxOne: {
            text: "Dorothy Hodgkin",
            id: 1,
        },
        checkboxTwo: {
            text: "Lise Meitner",
            id: 2,
        },
        checkboxThree: {
            text: "Mary Leakey",
        },
        solution: 2,
    },
    {
        question:
            "Actress Hedy Lamarr was the first woman to star naked in Film  History (Ecstasy, Gustav Machatý, 1933). ¿What other achievement can be attributed to her?",
        checkboxOne: {
            text: "She was the first woman programmer",
            id: 1,
        },
        checkboxTwo: {
            text: "She invented the basis for Wifi, Bluetooth and GPS",
            id: 2,
        },
        checkboxThree: {
            text: "She created a communication system based on ones and zeros",
            id: 3,
        },
        solution: 2,
    },
    {
        question:
            "Who wrote the ‘Silent Spring’ (1962), one of the most influential books for the modern environmental movement?",
        checkboxOne: {
            text: "Rachel Carson",
            id: 1,
        },
        checkboxTwo: {
            text: "Lynn Margulis",
            id: 2,
        },
        checkboxThree: {
            text: "Alice Ball",
            id: 3,
        },
        solution: 1,
    },
    {
        question: "Who is considered the first scientific woman in history?",
        checkboxOne: {
            text: "Hipatia de Alejandría",
            id: 1,
        },
        checkboxTwo: {
            text: "Themistoclea de Delfos",
            id: 2,
        },
        checkboxThree: {
            text: "Aspasia de Mileto",
            id: 3,
        },
        solution: 1,
    },
    {
        question: "Who was the first woman astronaut in history?",
        checkboxOne: {
            text: "Jocelyn Bell",
            id: 1,
        },
        checkboxTwo: {
            text: "Dorothy Crowfoot Hodgkin",
            id: 2,
        },
        checkboxThree: {
            text: "Valentina Tereshkova",
            id: 3,
        },
        solution: 3,
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
        answerOneButton.style.backgroundColor = "#379634";
    } else {
        answerOneButton.style.backgroundColor = "#EB5E55";
    }
    if (question.checkboxTwo.id === question.solution) {
        answerTwoButton.style.backgroundColor = "#379634";
    } else {
        answerTwoButton.style.backgroundColor = "#EB5E55";
    }
    if (question.checkboxThree.id === question.solution) {
        answerThreeButton.style.backgroundColor = "#379634";
    } else {
        answerThreeButton.style.backgroundColor = "#EB5E55";
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

//Go home button
function returnHome(event) {
    event.preventDefault();
    afterQuizSection.classList.add("display-none");
    beforeQuizSection.classList.remove("display-none");
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
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userScore = user.score + calculateQuizScore();
    const userUpdated = { ...user, score: userScore };
    sessionStorage.setItem("user", JSON.stringify(userUpdated));
    return userScore;
}
