"use strict";

const containerEl = document.querySelector('.container')

const leftEl = document.querySelector('.left')
const rightEl = document.querySelector('.right')

leftEl.addEventListener('mouseenter', function () {
    containerEl.classList.add('active_left')
})

leftEl.addEventListener('mouseleave', function () {
    containerEl.classList.remove('active_left')
})

rightEl.addEventListener('mouseenter', function () {
    containerEl.classList.add('active_right')
})

rightEl.addEventListener('mouseleave', function () {
    containerEl.classList.remove('active_right')
})