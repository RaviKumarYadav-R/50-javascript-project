const lowerEl = document.getElementById("lower");
const upperEl = document.getElementById("upper");
const symbolEl = document.getElementById("symbol");
const numberEl = document.getElementById("number");
const lengthEl = document.getElementById("length");
const lengthNum = document.querySelector(".length-num");
const passInput = document.querySelector(".pass-input");
const genBtn = document.querySelector(".gen-btn");
const copyBtn = document.querySelector(".copy");

genBtn.addEventListener("click", () => {
  if (
    !lowerEl.checked &&
    !upperEl.checked &&
    !symbolEl.checked &&
    !numberEl.checked
  ) {
    alert("please choose atleast one password type");
    return;
  }

  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-";

  let allCharacters = "";

  allCharacters += lowerEl.checked ? lowerCase : "";
  allCharacters += upperEl.checked ? upperCase : "";
  allCharacters += symbolEl.checked ? symbols : "";
  allCharacters += numberEl.checked ? numbers : "";

  let password = "";
  for (let i = 0; i < lengthEl.value; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passInput.value = password;
});

lengthEl.addEventListener("input", () => {
  lengthNum.innerHTML = lengthEl.value;
});

copyBtn.addEventListener("click", () => {
  if (!passInput.value) return;
  navigator.clipboard
    .writeText(passInput.value)
    .then(() => {
      console.log("Copied to clipboard ✅");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});

window.addEventListener("DOMContentLoaded", () => {
  lengthNum.innerHTML = lengthEl.value;
});
