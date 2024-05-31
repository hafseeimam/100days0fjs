'use strict';
let diceEl = {
    1: '&#9856;',
    2: '&#9857;',
    3: '&#9858;',
    4: '&#9859;',
    5: '&#9860;',
    6: '&#9861;'
}

const rollBtn = document.querySelector('.btn')
const dice = document.querySelector('.dice')
function generateDice() {
    const randomNum = Math.floor(Math.random() * 6) + 1
    let currentDice = diceEl[randomNum]
    dice.innerHTML = currentDice
}


rollBtn.addEventListener('click', function (e) {
    e.preventDefault()
    generateDice()
})
generateDice()