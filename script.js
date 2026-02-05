const tabs = document.querySelectorAll(`nav ul li`)

/* tabs.forEach((tab)=>{
    tab.addEventListener(`click`, ()=>{
        location.href = `${tab.textContent.toLowerCase()}.html`
    })
}) */

const whoIAm = [
    "a front-end developer",
    "loved by God",
    `living on a tight income from relatives`,
    "a South Sudanese",
    "an introvert",
    "a Coder",
    `interested in web design`,
    `struggling to make a difference in somebody's life`,
    `Love CSS`,
    `a refugee`,
    `a university student (about)`,
    "a KUKUtyo",
    `an indecisive man`,
    "a Makerere student",
    `a JavaScript coder`,
    `a Markdown enthusiast`,
    "a S6 leaver",
    "honest",
    `from Lorijo village in Lire Payam`,
    `residing in doma village, Palorinya Refugee settlement camp`,
    `a student from Ebenezer Baptist secondary school Itula`,
    `a briliant-academically student`,
    `an electrical engineer (dream)`,
    `${Math.round(
        (new Date() - new Date(2002, 6, 30)) / 3600000 / 24 / 366
    )} years old`
];
const placeHolder = document.querySelector(".whoIAm");
setInterval(() => {
    placeHolder.textContent = whoIAm[Math.floor(Math.random() * (whoIAm.length +1))]
}, 2523);