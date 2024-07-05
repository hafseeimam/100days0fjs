'use strict';
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
const progressEl = document.querySelector(".progress-bar-front");
const stepsEl = document.querySelectorAll(".step");

let current = 1
let steps = stepsEl.length
nextBtn.addEventListener('click', function () {
    current++
    if (current > steps) {
        current = steps
    }
    updateProgress()
})

prevBtn.addEventListener("click", () => {
    current--;
    if (current < 1) {
        current = 1;
    }
    updateProgress();
});

function updateProgress() {
    stepsEl.forEach((step, i) => {
        if (i < current) {
            step.classList.add('checked')
            step.innerHTML = `
      <i class="fas fa-check"></i>
      <small>${i === 0 ? "Start" : i === steps - 1 ? "Final" : "Step " + i}</small>
      `;
        } else {
            step.classList.remove("checked");
            step.innerHTML = `
      <i class="fas fa-times"></i>
      `;

        }
    })

    const checkedNumber = document.querySelectorAll(".checked");
    console.log(checkedNumber.length - 1, steps - 1);
    progressEl.style.width =
        ((checkedNumber.length - 1) / (steps - 1)) * 100 + "%";

    if (current === 1) {
        prevBtn.disabled = true;
    } else if (current === steps) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}