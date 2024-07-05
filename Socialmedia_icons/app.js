'use strict'

const dropdownMenu = document.querySelector('.dropdown')
const socialsContainer = document.querySelector('.menu')
const dropdownIcon = document.querySelector('.fas')
const links = document.querySelectorAll('li')

function toggleMenu() {
    dropdownIcon.classList.toggle('clicked')
    socialsContainer.classList.toggle('hidden')
}

dropdownMenu.addEventListener('click', function () {
    toggleMenu()
})


links.forEach(link => {
    link.addEventListener('click', function (e) {
        let text = e.target.textContent
        dropdownMenu.querySelector('h3').textContent = text
        toggleMenu()
    })
})
