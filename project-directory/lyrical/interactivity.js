import {timeStamps} from "timeline.js";

const audio = document.querySelector(`audio`);
const textArea = document.querySelector("figcaption");
timeStamps.forEach((sam, ind, ar) => {
    sam[0].split(":").forEach((tm, indeed, ar) => sam[0] = +ar[0] * 60 + +ar[1]);
    sam.unshift(ind);
});

function timer(file) {
    return Math.floor(file.currentTime);
}

function sel() {
    let time = timer(audio);
    let row = [];
    timeStamps.forEach((rowed) => {
        if (rowed[1] < time) {
            row[0] = rowed;
        }
    });
    row.forEach((a, b, c) => {
        textArea.innerHTML = c[c.length - 1][2];
    });
}
let grad = ['conic','radial']
setInterval(() => {
    if (!audio.paused && !audio.ended && !audio.seeking) {
        sel()
        let len = timer(audio)
        textArea.style.background = `repeating-${grad[Math.floor(Math.random() * 2)]}-gradient(green 0%, white, black, white, red, green 20%) ${len / audio.duration * textArea.clientWidth}px ${len / audio.duration * textArea.clientHeight}px /cover`
    }
    else textArea.style.background = `linear-gradient(blue,orange)`;
}, 500);

/* setInterval(()=>{

    audio.addEventListener(`canplaythrough`,(e)=>{
      console.log(`audio canplaythrough!!!`);
    })
    audio.addEventListener(`canplay`,(e)=>{
      console.log(`audio canplay!!`);
    })
    audio.addEventListener(`loadedmetadata`,(e)=>{
      console.log(`audio has loadedmetadata!!`);
    })
    audio.addEventListener(`loadeddata`,(e)=>{
      console.log(`audio has loadeddata!!`);
    })
    audio.addEventListener(`playing`,(e)=>{
      console.log(`audio playing!!`);
    })
},555) */