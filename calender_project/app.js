'use strict';
const monthEl = document.querySelector('.month')
const dateEl = document.querySelector('.date')
const datesContainer = document.querySelector('.month_dates')

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let currentMonth = months[date.getMonth()].toUpperCase()

let currentDate = date.toDateString()

const firstDay = new Date(year, month, 1).getDay()
const lastDay = new Date(year, month + 1, 0).getDate()

monthEl.textContent = currentMonth
dateEl.textContent = currentDate


for (let i = 0; i < firstDay; i++) {
    console.log(i);

    const emptyDiv = document.createElement('div')
    emptyDiv.classList.add('empty')
    datesContainer.appendChild(emptyDiv)
}

for (let i = 1; i <= lastDay; i++) {
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('empty');
    dateDiv.textContent = i;

    if (i === date.getDate()) {
        dateDiv.classList.add('active');
    }

    datesContainer.appendChild(dateDiv);
}