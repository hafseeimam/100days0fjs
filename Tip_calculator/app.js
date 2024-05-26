const inputBill = document.querySelector('#bill')
const inputPerc = document.querySelector('#percent')
const calcBtn = document.querySelector('.btn')
const total = document.querySelector('.total')

function calculateTip() {
    calcBtn.addEventListener("click", function (e) {
        e.preventDefault()
        let bill = inputBill.value
        let perc = inputPerc.value
        let tip = Number(perc / 100 * bill)
        total.textContent = `$${tip}.00`
        inputBill.value = inputPerc.value = ''
    })
}

calculateTip()