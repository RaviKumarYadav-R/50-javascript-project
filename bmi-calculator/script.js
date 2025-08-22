const weightEl = document.querySelector("#weight");
const heightEl = document.querySelector("#height");
const button = document.querySelector(".calculate");
const message = document.querySelector(".result");

button.addEventListener("click", () => {
  const weight = parseFloat(weightEl.value);
  const height = parseFloat(heightEl.value);

  // Weight validation
  if (!weightEl.value) {
    message.innerHTML = "⚠️ Please enter your weight";
    weightEl.focus();
    return;
  } else if (weight <= 0) {
    message.innerHTML = "⚠️ Please enter a valid weight";
    weightEl.focus();
    return;
  }

  // Height validation
  if (!heightEl.value) {
    message.innerHTML = "⚠️ Please enter your height";
    heightEl.focus();
    return;
  } else if (height <= 0) {
    message.innerHTML = "⚠️ Please enter a valid height";
    heightEl.focus();
    return;
  }

  // Calculate BMI (height in meters)
  const bmi = (weight / (height * height)).toFixed(2);

  // Determine BMI category
  let status = "";
  if (bmi < 18.5) {
    status = "Underweight 😕";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    status = "Normal weight 😊";
  } else if (bmi >= 25 && bmi < 29.9) {
    status = "Overweight 😐";
  } else {
    status = "Obese 😟";
  }

  // Show result
  message.innerHTML = `Your BMI is <strong>${bmi}</strong> – ${status}`;
});
