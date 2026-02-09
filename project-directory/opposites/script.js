import { opposites } from "words-collection.js"

let counter = 1;
let getFrom = [];
const ENTITIES = 6

for (let key in opposites) {
    for (let i = 0; i < 3; i++) {
        let ind = opposites[Math.floor(Math.random() * ENTITIES) + 1][1]
        if (!(ind in getFrom)) {
            getFrom.push(ind);
        }
    }
    getFrom.push(opposites[key][0]);
    getFrom.sort();
    const cont = document.createElement("section");
    cont.classList.add(`qn-container`);
    cont.classList.add(`qsn${counter}`);
    cont.innerHTML = `<p class="question">
  <span  class='counter'>${counter}.</span>
    What is the opposite of <span class="word">${opposites[key][1]}</span>?
  </p>
    <ol>
    <li>${getFrom[0]}</li>
    <li>${getFrom[1]}</li>
    <li>${getFrom[2]}</li>
    <li>${getFrom[3]}</li>
    </ol>
    `;
    ++counter;
    getFrom = [];
    document.querySelector("section").append(cont);
}

const qns = document.querySelectorAll("section[class*='qn-container qsn']");
const choices = document.querySelectorAll("ol li");
const questions = document.querySelectorAll("section[class^='qsn']");
const timeOut = 5;
counter = 1;
const nextButton = document.querySelector(".next");
const score = []
const wronged = []
const skipped = []

function viewer(e) {
    e.classList.add('selected')
    setTimeout(() => {
        e.classList.remove('selected')
    }, timeOut * 1000);
}
hideAllQns();
disNext();

function hideAllQns() {
    qns.forEach((qn) => {
        qn.style.display = "none";
    });
}

function disNext() {
    qns[counter - 1].style.display = "grid";
    nextButton.addEventListener("click", ()=>{
        nextQns(skipped)
        const n = qns[counter].querySelector('.word')
        skipped.push(n.textContent)
        document.querySelector('[next]').textContent = skipped.length
    })
}
function nextQns(a) {
    hideAllQns();
    qns[counter].style.display = "grid";
    ++counter;
    let total ;
    if (total < 0) {
        total = 1
    } else {
        total = skipped.length + score.length + wronged.length
    }
    const max = (total / 151) * 100
    console.log(max);
    const stops = [
        ['green',skipped.length],
        ['blue',skipped.length + score.length],
        ['red',total]
    ]
    document.querySelector('.dataRep').style.background = `conic-gradient(
    ${stops[0][0]}
      0
      ${(stops[0][1] / total)*(max - .25)}%,
    ${stops[1][0]}
      ${(stops[0][1] / total)*(max + .25)}%
      ${(stops[1][1] / total)*(max - .25)}%,
    ${stops[2][0]}
      ${(stops[1][1] / total)*(max + .25)}%
      ${(stops[2][1] / total)*(max - .25)}%,
    white
      ${(stops[2][1]/total)*(max + .25)}%
      ${max}%
  )`
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        choice.textContent === opposites[counter][0]
            ? correct(choice,score)
            : wrong(choice,wronged);
    });
});

function correct(a,b) {
    a.classList.add("correctChoice");
    disableOtherChoices(a);
    b.push(a.textContent)
    document.querySelector('[corr]').textContent = b.length
}
function wrong(a,b) {
    a.classList.add("wrong");
    disableOtherChoices(a);
    b.push(a.textContent)
    document.querySelector('[wrong]').textContent = b.length
}

function disableOtherChoices(a) {
    setTimeout(nextQns, 2000)
}

document.querySelector('[scoreBoard] button').addEventListener('click',(b)=>{
    b.target.parentElement.classList.toggle('active')
    let c = b.target.parentElement.classList.contains('active')
    if (c) b.target.textContent = 'Hide Score'
    else b.target.textContent = 'Show Score'
})