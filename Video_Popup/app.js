const watchBtn = document.querySelector('.btn')
const trailerContainer = document.querySelector('.trailer-container')
const closeTrailerbtn = document.querySelector('.close-icon')
const videoEl = document.querySelector('video')
watchBtn.addEventListener('click', function (e) {
    e.preventDefault()
    trailerContainer.classList.toggle('active')
})

closeTrailerbtn.addEventListener('click', function () {
    trailerContainer.classList.add('active')
    videoEl.pause()
    videoEl.currentTime = 0
})