'use strict';
const percEl = document.querySelector('.percentage')
const barPerc = document.querySelector('.bar_perc')
let cur = 0

function loader() {
    cur++
    percEl.textContent = `${cur}%`
    barPerc.style.width = `${cur}%`
    if (cur === 100) {
        clearInterval(intervalId)
    }
}

const intervalId = setInterval(loader, 50)
