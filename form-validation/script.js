const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting

  // Clear previous messages
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  let isValid = true;

  // Username validation
  if (username.value.trim() === "") {
    showError(username, "Username is required");
    isValid = false;
  }

  // Email validation
  if (!validateEmail(email.value)) {
    showError(email, "Enter a valid email");
    isValid = false;
  }

  // Password validation
  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  // Confirm password
  if (confirmPass.value !== password.value) {
    showError(confirmPass, "Passwords do not match");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully ✅");
    form.reset(); // Clear form
  }
});

function showError(input, message) {
  const errorEl = input.parentElement.querySelector(".error");
  errorEl.textContent = message;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
