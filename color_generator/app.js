'use strict';

const containerApp = document.querySelector('.container')

let hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f']


for (let i = 0; i < 30; i++) {
    let colorContainer = document.createElement('div')
    colorContainer.classList.add('color')
    containerApp.appendChild(colorContainer)
}


function generateRandomCol() {
    let hex = '#'
    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * hexArr.length)
        hex += `${hexArr[random]}`
    }
    return hex
}


function generateColors() {
    const colorContainerEls = document.querySelectorAll('.color')
    colorContainerEls.forEach(container => {
        let colorHex = generateRandomCol()
        container.style.backgroundColor = colorHex
        container.innerText = colorHex
    })
}

generateColors()