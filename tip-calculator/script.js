const billAmountEl = document.querySelector("#bill-amount");
const tipPercentageEl = document.querySelector("#tip-percentage");
const calcBtn = document.querySelector(".calc-tip");
const tipAmount = document.querySelector(".tip");
const totalAmount = document.querySelector(".total");
const errorMsg = document.querySelector(".error");

calcBtn.addEventListener("click", () => {
  const amount = Number(billAmountEl.value);
  const tipPercentage = Number(tipPercentageEl.value);

  // Clear previous results
  tipAmount.innerHTML = "";
  totalAmount.innerHTML = "";

  if (!amount && !tipPercentage) {
    errorMsg.innerHTML = "Please fill all field";
    return;
  }

  if (!amount) {
    errorMsg.innerHTML = "Please enter bill amount";
    return;
  }
  if (!tipPercentage) {
    errorMsg.innerHTML = "Please enter tip percentage";
    return;
  }

  if (amount < 0 || tipPercentage < 0) {
    errorMsg.innerHTML = "Please enter positive values only";
    return;
  }

  const tip = amount * (tipPercentage / 100);
  tipAmount.innerHTML = `₹${tip.toFixed(2)}`;
  totalAmount.innerHTML = `₹${(amount + tip).toFixed(2)}`;
});

[billAmountEl, tipPercentageEl].forEach((input) => { //remove error msg when user start typing
  input.addEventListener("input", () => {
    errorMsg.innerHTML = "";
  });
});
