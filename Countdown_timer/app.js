'use strict';

const btnsEl = document.querySelectorAll('.btn')
const timerDisplay = document.querySelector('.timer')

let initialTime = 24 * 60 * 60
let time = initialTime
let intervalId;

function displayTimer(time) {
    const hours = Math.round(time / (60 * 60))
    const mins = Math.floor((time % (60 * 60) / 60))
    const secs = time % 60
    timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

btnsEl.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        const classEl = e.target.classList.value
        if (classEl.includes('start')) {
            intervalId = setInterval(() => {
                if (time > 0) {
                    time--
                    displayTimer(time)
                }
                else {
                    clearInterval(intervalId)
                }

            }, 1000);
        }
        if (classEl.includes('stop')) {
            clearInterval(intervalId)
        }
        if (classEl.includes('reset')) {
            clearInterval(intervalId);
            time = initialTime;
            displayTimer(time)
        }
    })
})