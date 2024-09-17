'use strict';

const daysEl = document.querySelector('.days')
const hoursEl = document.querySelector('.hours')
const minsEl = document.querySelector('.mins')
const secsEl = document.querySelector('.secs')

let newYear = new Date('Jan 1, 2025 00:00:00').getTime()

function createTimer() {
    const currentTime = new Date().getTime()
    const remainingTime = newYear - currentTime

    let seconds = 1000
    let minutes = seconds * 60
    let hours = minutes * 60
    let day = hours * 24

    const remDay = Math.floor(remainingTime / day)
    const remHours = Math.floor((remainingTime % day) / hours)
    const remMins = Math.floor((remainingTime % hours) / minutes)
    const remSecs = Math.floor((remainingTime % minutes) / seconds)

    daysEl.textContent = remDay
    hoursEl.textContent = remHours
    minsEl.textContent = remMins
    secsEl.textContent = remSecs

    if (remainingTime <= 0) {
        clearInterval(timeInterval);
        daysEl.textContent = 0;
        hoursEl.textContent = 0;
        minsEl.textContent = 0;
        secsEl.textContent = 0;
    }
}

const timeInterval = setInterval(createTimer, 1000)
