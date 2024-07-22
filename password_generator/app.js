'use strict';
let charArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 't', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '?', ':', '{', '}', '[', ']', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const generateBtn = document.querySelector('.btn')
const input = document.querySelector('#password-input')
const copybtn = document.querySelector('.fa-copy')
const copyEl = document.querySelector('.copied')

function generatePassword() {
    let lengthPassword = 14
    let password = ''
    for (let i = 0; i < lengthPassword; i++) {
        const random = Math.floor(Math.random() * charArr.length)
        password += charArr[random]
    }
    input.value = password
    copyEl.textContent = `${password}  copied!`
}

function copyPassword() {
    input.select()
    input.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(input.value);
}

copybtn.addEventListener('click', function () {
    copyPassword()
    if (input.value) {
        copyEl.classList.remove('active')
        setTimeout(() => {
            copyEl.classList.add('active')
        }, 2000)
    }
})

generateBtn.addEventListener('click', generatePassword)

