'use strict';
const tabContainer = document.querySelector('.tabs-container')
const btnsEl = document.querySelectorAll('.btn')
const content = document.querySelectorAll('.content')
tabContainer.addEventListener('click', function (e) {
    const id = e.target.dataset.id
    if (id) {
        btnsEl.forEach(btn => {
            btn.classList.remove('activate')
        })
        e.target.classList.add('activate')
        content.forEach(article => {
            article.classList.remove('active')
        })
        document.getElementById(id).classList.add('active')
    }
})