const passwordInput = document.querySelector("input[name=password]");
const confirmInput = document.querySelector("input[name=confirmpassword]");
const messageElement = document.getElementById("message");

// Check the validity of the password input value and matching if passed
function checkValue() {
  const pattern = /.{8,}/;
  const isValid = pattern.test(passwordInput.value);

  if (passwordInput.value !== "" && !isValid) {
    passwordInput.setCustomValidity(
      "Password must be at least 8 characters long."
    );
    messageElement.style.color = "#b92326";
    messageElement.innerHTML = "* Password must be at least 8 characters long.";
  } else if (passwordInput.value !== "" && confirmInput.value === "") {
    passwordInput.setCustomValidity("");
    messageElement.style.color = "green";
    messageElement.innerHTML = "* Please confirm your password.";
  } else if (confirmInput.value === passwordInput.value) {
    confirmInput.setCustomValidity("");
    messageElement.innerHTML = "";
  } else if (confirmInput.value !== passwordInput.value) {
    confirmInput.setCustomValidity("Passwords do not match");
    messageElement.style.color = "#b92326";
    messageElement.innerHTML = "* Passwords don't match.";
  }
}

// Check the validity of the confirm password input value while typing
function check() {
  if (confirmInput.value === passwordInput.value) {
    confirmInput.setCustomValidity("");
  } else {
    confirmInput.setCustomValidity("Passwords do not match");
  }
}

// Register event listeners for the input elements
passwordInput.addEventListener("blur", checkValue);
confirmInput.addEventListener("blur", checkValue);
confirmInput.addEventListener("onkeyup", check);
