const selectFrom = document.querySelector("#selectFrom");
const selectTo = document.querySelector("#selectTo");

import currencies from "./code.js";

for (const code of Object.keys(currencies)) {
  const fromOption = document.createElement("option");
  fromOption.value = code;
  if (code === "USD") {
    fromOption.selected = true;
  }
  fromOption.innerText = currencies[code];
  selectFrom.append(fromOption);

  const toOption = document.createElement("option");
  toOption.value = code;
  if (code === "INR") {
    toOption.selected = true;
  }
  toOption.innerText = currencies[code];
  selectTo.append(toOption);
}

async function convertCurrency() {
  const amount = document.getElementById("amount-input");
  const from = selectFrom.value;
  const to = selectTo.value;
  const result = document.querySelector(".result");

  if (!amount.value || amount.value <= 0) amount.value = 1;

  result.innerHTML = "Converting...";
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${from}`
    );
    if (!response.ok) throw new Error("Conversion rate not found");
    const data = await response.json();
    const rate = data.rates[to];
    if (!rate) throw new Error("Selected currency not supported");
    const convertedAmount = (amount.value * rate).toFixed(2);
    result.innerHTML = `${amount.value} ${from} ➟ ${convertedAmount} ${to}`;
  } catch (error) {
    result.innerHTML = "Error fetching exchange rates. Please try again.";
    console.error(error);
  }
}

document.querySelector(".convert").addEventListener("click", convertCurrency);
