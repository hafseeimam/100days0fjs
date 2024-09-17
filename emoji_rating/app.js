'use strict';

const starBtns = document.querySelectorAll('.fa-star')
const emojiEl = document.querySelectorAll('.far')
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

let counter = 0

starBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        btn.classList.toggle('active')
        if (btn.classList.contains('active')) {
            counter++
            emojiEl.forEach(emoji => {
                emoji.style.transform = `translateX(-${counter * 48}px)`
                emoji.style.color = `${colorsArray[counter]}`
            })
        } else {
            counter--
            emojiEl.forEach(emoji => {
                emoji.style.transform = `translateX(-${counter * 48}px)`
                emoji.style.color = `${colorsArray[counter]}`
            })

        }
    })
})