'use strict';

const kits = ["crash", "kick", "snare", "tom"];

const containerEl = document.querySelector('.container');

kits.forEach(kit => {
    const btnEl = document.createElement('button')
    btnEl.classList.add('btn')
    btnEl.style.backgroundImage = `url(images/${kit}.png)`
    btnEl.textContent = kit
    containerEl.append(btnEl)
    const audioEl = document.createElement('audio')
    audioEl.src = `sounds/${kit}.mp3`
    containerEl.append(audioEl)
    btnEl.addEventListener('click', () => {
        audioEl.play()
    })
})