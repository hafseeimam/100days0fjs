'use strict';

const allBtns = document.querySelectorAll('.btn')
allBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        const answer = btn.parentElement.nextElementSibling
        answer.classList.toggle('show_answer')
        btn.classList.toggle('show_answer')
    })
})
