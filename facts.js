const facts = [
    "While engineering and computer-related fields are some of the fastest growing fields in the United States, women only hold about a quarter or less of those positions.",
    "American women working in science and high-tech fields are 45 percent more likely than their male peers to leave the industry within a year, often due to gender bias and feelings of being compared with their male counterparts.",
    "The average percentage of women working in the tech industry is 30%, according to diversity reports released by 11 of the world's largest tech companies in 2014.",
    "In the mid-1980s, 37% of computer science students were women; in 2012, 18%.",
    "Women only earn about 12% of computer science degrees nationally.",
    "Sheryl Sandberg, COO of Facebook, Susan Wojcicki, CEO of YouTube, and Yahoo! CEO Marissa Mayer was listed as one of the most powerful women in the tech industry by Forbes magazine in 2015.",
    "Las mujeres asiáticas, afroamericanas e hispanas solo representaron el 5 %, 3 % y 1 % de la fuerza laboral informática, respectivamente, en 2014.",
    "Between 2000 and 2014, the number of female undergraduate freshmen interested in majoring in Computer Science dropped by 7%.",
    "In 2014, only 20% of students taking the Advanced Placement Computer Science exam were women, even though women represented 56% of all Advanced Placement test takers that year.",
    "Only about 7% of investor money goes to female-led startups.",
    "11% of Silicon Valley executives are women."
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
