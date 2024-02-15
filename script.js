const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const nameIcon = document.getElementById('nameIcon');
const emailIcon = document.getElementById('emailIcon');
const passwordIcon = document.getElementById('passwordIcon');
const confirmPasswordIcon = document.getElementById('confirmPasswordIcon');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

function validateForm() {
  let isFormValid = true;

  if (!validateName()) {
    isFormValid = false;
  }
  if (!validateEmail()) {
    isFormValid = false;
  }
  if (!validatePassword()) {
    isFormValid = false;
  }
  if (!validateConfirmPassword()) {
    isFormValid = false;
  }

  if (isFormValid) {
    form.submit();
  }
}

function validateName() {
  if (nameRegex.test(nameInput.value)) {
    nameIcon.classList.remove('error');
    nameIcon.classList.add('success');
    nameError.innerText = '';
    return true;
  } else {
    nameIcon.classList.remove('success');
    nameIcon.classList.add('error');
    nameError.innerText = 'Name should only contain alphabets and spaces.';
    return false;
  }
}

function validateEmail() {
  if (emailRegex.test(emailInput.value)) {
    emailIcon.classList.remove('error');
    emailIcon.classList.add('success');
    emailError.innerText = '';
    return true;
  } else {
    emailIcon.classList.remove('success');
    emailIcon.classList.add('error');
    emailError.innerText = 'Please enter a valid email address.';
    return false;
  }
}

function validatePassword() {
  if (passwordRegex.test(passwordInput.value)) {
    passwordIcon.classList.remove('error');
    passwordIcon.classList.add('success');
    passwordError.innerText = '';
    return true;
  } else {
    passwordIcon.classList.remove('success');
    passwordIcon.classList.add('error');
    passwordError.innerText = 'Password should have a minimum of 8 characters including at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    return false;
  }
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value === passwordInput.value && confirmPasswordInput.value !== '') {
    confirmPasswordIcon.classList.remove('error');
    confirmPasswordIcon.classList.add('success');
    confirmPasswordError.innerText = '';
    return true;
  } else {
    confirmPasswordIcon.classList.remove('success');
    confirmPasswordIcon.classList.add('error');
    confirmPasswordError.innerText = 'Passwords do not match.';
    return false;
  }
}
