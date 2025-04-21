
const inputAmount = document.getElementById("amount-input");
const swap = document.getElementById("swap-currencies");
const outputAmount = document.getElementById("amount-output");
const reset = document.getElementById("reset-btn");
const submit = document.getElementById("submit-btn");

//* map the selection template to select input
const template = document.getElementById("currency-options");
const currencyFromSelect = document.getElementById("currency-from");
const currencyToSelect = document.getElementById("currency-to");






function populateCurrencyDropdowns() {
  const options = template.content.cloneNode(true);
  const optionsClone = template.content.cloneNode(true);
  currencyFromSelect.appendChild(options);
  currencyToSelect.appendChild(optionsClone);
}
populateCurrencyDropdowns();
//set defaults for drop downs
currencyFromSelect.value = "EUR"
currencyToSelect.value = "USD"



swap.addEventListener('click',(e)=>{
  console.log(currencyFromSelect.value)
})






submit.addEventListener("click", () => {
  const amount = parseFloat(inputAmount.value);
  const fromCurrency = currencyFromSelect;
  const toCurrency = currencyToSelect;

   console.log(`apiendpoint:/${fromCurrency}/${toCurrency}/${amount}`)
  
});



//reset

reset.addEventListener('click',(e)=> {
inputAmount.value = ""
outputAmount = ''

  console.log('reset pressed')
})