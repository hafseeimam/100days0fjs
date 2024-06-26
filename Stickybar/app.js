'use strict';

const nav = document.querySelector('.navbar')
const header = document.querySelector('.header')

let options = {
    root: null,
    rootMargin: '85%',
    threshold: 0.9
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        console.log(entry);
        if (!entry.isIntersecting) {
            nav.classList.add('active')
        } else {
            nav.classList.remove('active')
        }
    });
}

let observer = new IntersectionObserver(handleIntersection, options)
observer.observe(header)
