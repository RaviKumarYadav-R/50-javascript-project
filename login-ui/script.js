document.addEventListener("DOMContentLoaded", function () {
  const showPasswordCheckbox = document.getElementById("show-password");
  const passwordInput = document.getElementById("password");
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");

  showPasswordCheckbox.addEventListener("change", function () {
    if (showPasswordCheckbox.checked) {
      passwordInput.setAttribute("type", "text");
      showPasswordCheckbox.nextElementSibling.innerHTML =
        '<i class="fas fa-eye-slash"></i>';
    } else {
      passwordInput.setAttribute("type", "password");
      showPasswordCheckbox.nextElementSibling.innerHTML =
        '<i class="fas fa-eye"></i>';
    }
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for validation
    // Clear previous error messages
    document
      .querySelectorAll(".error-message")
      .forEach((el) => (el.textContent = ""));
    const username = usernameInput.value;
    const password = passwordInput.value;

    let loginValid = true;

    if (!username) {
      showError(usernameInput, "Username is required.");
      loginValid = false;
    }
    if (password.length < 6) {
      showError(passwordInput, "Password must be at least 6 characters.");
      loginValid = false;
    }

    if (loginValid) {
      alert(`Username: ${username}\nPassword: ${password}`);
      loginForm.reset(); // Reset form after successful validation
    }
  });

  function showError(input, message) {
    const errorMessage = input.parentElement.querySelector(".error-message");
    errorMessage.textContent = message;
  }
});
