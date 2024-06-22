'use strict';

// celcius - fahren = (0°C × 9/5) + 32 = 32°F
// celcius - kelvin = 0°C + 273.15 = 273.15K
// fahren - kelvin = (0°F − 32) × 5/9 + 273.15 = 255.372K
// fahren - celcius = (0°F − 32) × 5/9 = -17.78°C
// kelvin - celcius = 0K − 273.15 = -273.1°C
// kelvin - fahren = (0K − 273.15) × 9/5 + 32 = -459.7°F

const celsiusInput = document.getElementById('celsius')
const kelvinInput = document.getElementById('kelvin')
const fahrenInput = document.getElementById('fahrenheit')



function convertTemp() {
    const celsiusVal = Number(celsiusInput.value)
    const kelvinVal = Number(kelvinInput.value)
    const fahrenVal = Number(fahrenInput.value)

    if (celsiusVal) {
        fahrenInput.value = Math.round(`${(celsiusVal * 9 / 5) + 32}`)
        kelvinInput.value = Math.round(`${celsiusVal + 273.15}`)
    }

    else if (kelvinVal) {
        celsiusInput.value = Math.round(`${kelvinVal - 273.15}`)
        fahrenInput.value = Math.round(`${(kelvinVal - 273.15) * 9 / 5 + 32}`)
    }

    else if (fahrenVal) {
        celsiusInput.value = Math.round(`${(fahrenVal - 32) * 5 / 9}`)
        kelvinInput.value = Math.round(`${(fahrenVal - 32) * 5 / 9 + 273.15}`)
    }

}

function clearInputs() {
    kelvinInput.value = celsiusInput.value = fahrenInput.value = '';
}

celsiusInput.addEventListener('focus', clearInputs);
kelvinInput.addEventListener('focus', clearInputs);
fahrenInput.addEventListener('focus', clearInputs);