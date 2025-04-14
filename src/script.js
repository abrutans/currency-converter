//Doc setup
const inputAmount = document.getElementById('amount-input');
const reset = document.getElementById('reset-btn')
const swap = document.getElementById('swap-currencies')







//* map the selection template to select input
const template = document.getElementById('currency-options')
const currencyFromSelect = document.getElementById('currency-from')
const currencyToSelect = document.getElementById('currency-to')


function populateCurrencyDropdowns(){
    const options = template.content.cloneNode(true);
    const optionsClone = template.content.cloneNode(true)
        currencyFromSelect.appendChild(options)
        currencyToSelect.appendChild(optionsClone)
}
populateCurrencyDropdowns();