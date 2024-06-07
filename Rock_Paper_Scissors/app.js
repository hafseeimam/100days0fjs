'use strict';

const gameBtns = document.querySelectorAll('.btn')
const playerEl = document.querySelector('.player-score')
const computerEl = document.querySelector('.computer-score')
const winnerEl = document.querySelector('.winner')
const resetbtn = document.querySelector('.reset-btn')
const choice = ['rock', 'paper', 'scissors']

let playerScore = 0
let computerScore = 0
let computerChoice
let playing = true

function computerMove() {
    let random = Math.floor(Math.random() * 3)
    computerChoice = choice[random]
    console.log(computerChoice);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playing = true;
    playerEl.textContent = playerScore;
    computerEl.textContent = computerScore;
    winnerEl.textContent = '';
}

gameBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        if (playing) {
            e.preventDefault()
            const getMove = e.target.classList.value
            console.log(getMove);
            computerMove()
            if (getMove.includes('paper') && computerChoice === 'scissors') {
                computerScore++
                computerEl.textContent = computerScore
            }
            else if (getMove.includes('paper') && computerChoice === 'rock') {
                playerScore++
                playerEl.textContent = playerScore
            }
            else if (getMove.includes('rock') && computerChoice === 'paper') {
                computerScore++
                computerEl.textContent = computerScore
            }
            else if (getMove.includes('rock') && computerChoice === 'scissors') {
                playerScore++
                playerEl.textContent = playerScore
            }
            else if (getMove.includes('scissor') && computerChoice === 'paper') {
                playerScore++
                playerEl.textContent = playerScore
            }
            else if (getMove.includes('scissor') && computerChoice === 'rock') {
                computerScore++
                computerEl.textContent = computerScore
            }
        }
        if (computerScore === 10 || playerScore === 10) {
            playing = false
            playerScore > computerScore ? winnerEl.innerText = 'You have won 🎉' : winnerEl.innerText = 'You have lose 😞'
        }
    }
    )
})

resetbtn.addEventListener('click', resetGame)