'use strict'

const startBtn = document.querySelectorAll('.btn')
const timerDisplay = document.querySelector('.timer')
const initialTime = 2 * 60
let time = initialTime
let intervalId;

function displayCounter(time) {
    let minutes = Math.floor(time / 60)
    let secs = time % 60
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

startBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        const getClass = e.target.classList.value
        if (getClass.includes('start')) {
            clearInterval(intervalId)
            intervalId = setInterval(() => {
                if (time > 0) {
                    time--;
                    displayCounter(time)
                } else {
                    clearInterval(intervalId)
                }
            }, 1000);
        }
        if (getClass.includes('stop')) {
            clearInterval(intervalId)
        }
        if (getClass.includes('reset')) {
            clearInterval(intervalId)
            time = initialTime
            displayCounter(time)
        }
    })
})