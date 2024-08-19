'use strict';

const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')
const inputAnswer = document.querySelector('.answer')
const submitBtn = document.querySelector('.btn')
const scoreEl = document.querySelector('.score')

let random1 = Math.floor(Math.random() * 10) + 1
let random2 = Math.floor(Math.random() * 10) + 1

num1.textContent = random1
num2.textContent = random2

let correctAnswer = random1 * random2
let count = JSON.parse(localStorage.getItem("count"));

submitBtn.addEventListener('click', function (e) {
    let answer = Number(inputAnswer.value)
    if (answer === correctAnswer) {
        count += 1
        scoreEl.textContent = `score: ${count}`
    }
    else {
        if (count === 0) {
            scoreEl.textContent = `score: 0`
        }
        else {
            count -= 1
            scoreEl.textContent = `score: ${count}`
        }
    }
    random1 = Math.floor(Math.random() * 10) + 1;
    random2 = Math.floor(Math.random() * 10) + 1;
    num1.textContent = random1;
    num2.textContent = random2;
    correctAnswer = random1 * random2;
    inputAnswer.value = ''
})
scoreEl.textContent = `score: ${count}`

localStorage.setItem("count", JSON.stringify(count));
