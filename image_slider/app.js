'use strict';

const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const imgEl = document.querySelectorAll('.slide_img')
const slideContainer = document.querySelector('.slide')
let currentImg = 1
let timeOut;
prevBtn.addEventListener('click', function () {
    currentImg--
    clearTimeout(timeOut)
    slideImage()
})

nextBtn.addEventListener('click', function () {
    currentImg++
    clearTimeout(timeOut)
    slideImage()
})

function slideImage() {
    if (currentImg > imgEl.length) {
        currentImg = 1
    } else if (currentImg < 1) {
        currentImg = imgEl.length
    }
    slideContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`
    timeOut = setTimeout(() => {
        currentImg++
        slideImage()
    }, 4000);
}

slideImage()