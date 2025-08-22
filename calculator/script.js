const buttons = document.querySelectorAll(".button");
const input = document.querySelector(".result-input");
const equation = document.querySelector(".equation");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value === "ac") {
      equation.innerHTML = "";
      input.value = "";
    } else if (btn.value === "clr") {
      input.value = input.value.slice(0, -1);
      if (!input.value) {
        input.value = equation.innerHTML;
        equation.innerHTML = "";
      }
    } else if (btn.value === "%") {
      let eq = input.value.replaceAll("÷", "/").replaceAll("x", "*");
      equation.innerHTML = input.value;
      input.value = eval(eq) / 100;
    } else if (btn.value === "=") {
      let eq = input.value.replaceAll("÷", "/").replaceAll("x", "*");
      equation.innerHTML = input.value;
      try {
        input.value = eval(eq);
      } catch (error) {
        input.value = error
      }
    } else {
      input.value += btn.value;
    }
  });
});
