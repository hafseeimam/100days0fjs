'use strict'

const barBtn = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-xmark')
const sidebar = document.querySelector('.sidebar')

barBtn.addEventListener('click', function () {
    sidebar.classList.toggle('show')
})

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show')
})