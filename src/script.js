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

submit.addEventListener("click", () => {
  const amount = parseFloat(inputAmount.value);
  const fromCurrency = currencyFromSelect.value;
  const toCurrency = currencyToSelect.value;


  if (isNaN(amount)) {
    alert("Please enter a valid number for the amount.");
    return;
  }


  const apiUrl = 

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        outputAmount.value = data.result.toFixed(2);
      } else {
        alert("Conversion failed. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error during conversion:", error);
      alert(
        "Something went wrong. Please check your internet connection and try again."
      );
    });
});
