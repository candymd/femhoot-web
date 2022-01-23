const facts = [
    "Fun fact número 1",
    "Fun fact número 2",
    "Fun fact número 3",
    "Fun fact número 4",
    "Fun fact número 5",
    "Fun fact número 6",
    "Fun fact número 7",
];

const funFactText = document.querySelector(".fun-fact-text");

function newFactBtnHandleClick(event) {
    event.preventDefault();
    funFactText.innerHTML = newFactGenerator();
}

function newFactGenerator() {
    const index = Math.floor(Math.random() * facts.length);
    return facts[index];
}
