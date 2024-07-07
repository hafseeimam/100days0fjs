'use strict';

const textInput = document.querySelector('#text-area')
const totalCharacter = document.querySelector('.total')
const remainingCharacter = document.querySelector('.remain')
let total = 50

document.addEventListener('keyup', function (e) {
    const totalLength = textInput.value.length
    if (totalLength <= 50) {
        totalCharacter.textContent = totalLength
        remainingCharacter.textContent = total - totalLength
    }
    else {
        textInput.disabled = true
    }
})