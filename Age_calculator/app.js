const calcBtn = document.querySelector('.btn')
const dateInput = document.querySelector('#date')
const ageText = document.querySelector('.age-text')

// function calcAge() {
//     calcBtn.addEventListener('click', function (e) {
//         e.preventDefault()
//         const input = dateInput.value
//         let arr = input.split('-')
//         const [year, month, date] = [...arr]
//         const getdate = new Date()
//         const getyear = getdate.getFullYear()
//         const getmonth = getdate.getMonth() + 1
//         const age = getyear - Number(year)
//         Number(month) > getmonth ? ageText.textContent = `Your age is ${age - 1} years old` : ageText.textContent = `Your age is ${age} years old`
//         dateInput.value = ''
//     })
// }

function calcAge() {
    calcBtn.addEventListener('click', function (e) {
        e.preventDefault()
        const input = dateInput.value
        let arr = input.split('-')
        const [year, month, date] = [...arr]
        const dob = new Date(input)
        const month_diff = Date.now() - dob.getTime()
        let age_dt = new Date(month_diff)
        let year_age = age_dt.getUTCFullYear()
        let age = Math.abs(year_age - 1970)
        ageText.textContent = `Your age is ${age} years old`
        dateInput.value = ''
    })
}

calcAge()

