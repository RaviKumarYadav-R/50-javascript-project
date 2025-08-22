const totalBalance = document.querySelector(".total-balance");
const incomeEl = document.querySelector(".income-balance");
const expenseEl = document.querySelector(".expense-balance");
const trackList = document.querySelector(".track-list");
const transactionBtn = document.querySelectorAll(".transaction-btn");
const textInput = document.querySelector("#text");
const amountInput = document.querySelector("#amount");
const addBtn = document.querySelector(".add-btn");

let transaction = "income";
let balance;
const transactionHistory =
  JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction() {
  if (textInput.value.trim() === "" || amountInput.value.trim() === "") {
    alert("Please fill all input");
  } else {
    if (
      transaction === "expense" &&
      (balance <= 0 || balance < Number(amountInput.value.trim()))
    ) {
      alert("you have not suffecient balance");
    } else {
      let transactionDetails = {
        text: textInput.value.trim(),
        amount: Number(
          transaction === "income"
            ? amountInput.value.trim()
            : "-" + amountInput.value.trim()
        ),
        transactionType: transaction,
      };
      transactionHistory.push(transactionDetails);
      renderTransaction(transactionDetails);
      updateBalance();
      updateStorage();
      textInput.value = "";
      amountInput.value = "";
    }
  }
}

function renderTransaction(transactionDetails) {
  const listEl = document.createElement("li");
  listEl.classList.add(
    "list",
    transactionDetails.transactionType === "income" ? "income" : "expense"
  );
  listEl.innerHTML = `<p>${transactionDetails.text}</p>
            <span>₹${transactionDetails.amount}</span>`;
  trackList.appendChild(listEl);
}

const currencyConverter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});

function updateBalance() {
  const amount = transactionHistory.map(
    (transactionAmount) => transactionAmount.amount
  );
  balance = amount.reduce((acc, curr) => acc + curr, 0);
  totalBalance.innerText = currencyConverter.format(balance);
  const incomeAmount = amount
    .filter((value) => value > 0)
    .reduce((acc, val) => acc + val, 0);
  incomeEl.innerText = currencyConverter.format(incomeAmount);
  const expenseAmount = amount
    .filter((value) => value < 0)
    .reduce((acc, val) => acc + val, 0);
  expenseEl.innerText = currencyConverter.format(expenseAmount);
}

function updateStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactionHistory));
}

transactionBtn.forEach((button) => {
  button.addEventListener("click", () => {
    transactionBtn.forEach((btn) => btn.classList.remove("selected"));
    transaction = button.value;
    button.classList.add("selected");
  });
});

window.addEventListener("DOMContentLoaded", () => {
  transactionHistory.forEach((transaction) => {
    renderTransaction(transaction);
  });
  updateBalance();
});
addBtn.addEventListener("click", addTransaction);
