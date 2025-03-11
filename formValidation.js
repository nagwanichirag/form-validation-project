// JavaScript Validation Logic

// Function to validate the full name
function validateFullName() {
    const fullName = document.getElementById('fullName').value; // Get the value entered in the full name field
    const errorMessage = document.getElementById('fullNameError'); // Get the error message element for full name
    
    if (fullName.length < 5) { // Check if the full name is less than 5 characters
        errorMessage.innerText = "Full name must be at least 5 characters long."; // Display error message
    } else {
        errorMessage.innerText = ""; // Clear the error message if the input is valid
    }
}

// Function to validate email
function validateEmail() {
    const email = document.getElementById('email').value; // Get the value entered in the email field
    const errorMessage = document.getElementById('emailError'); // Get the error message element for email
    
    if (!email.includes('@')) { // Check if the email contains '@' symbol
        errorMessage.innerText = "Enter a valid email with '@'."; // Display error message
    } else {
        errorMessage.innerText = ""; // Clear the error message if the input is valid
    }
}

// Function to validate phone number
function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value; // Get the value entered in the phone number field
    const errorMessage = document.getElementById('phoneError'); // Get the error message element for phone number
    
    if (phoneNumber === '123456789') { // Check if the phone number is the prohibited one
        errorMessage.innerText = "Phone number cannot be 123456789."; // Display error message
    } else if (!/^\d{10}$/.test(phoneNumber)) { // Check if the phone number is not exactly 10 digits
        errorMessage.innerText = "Phone number must be a 10-digit number."; // Display error message
    } else {
        errorMessage.innerText = ""; // Clear the error message if the input is valid
    }
}

// Function to validate password
function validatePassword() {
    const password = document.getElementById('password').value; // Get the value entered in the password field
    const errorMessage = document.getElementById('passwordError'); // Get the error message element for password
    const fullName = document.getElementById('fullName').value; // Get the value entered in the full name field

    // Check if password is too weak (e.g., matches the word 'password', matches full name, or is too short)
    if (password === 'password' || password === fullName || password.length < 8) {
        errorMessage.innerText = "Password is not strong enough."; // Display error message
    } else {
        errorMessage.innerText = ""; // Clear the error message if the input is valid
    }
}

// Function to validate confirm password
function validateConfirmPassword() {
    const confirmPassword = document.getElementById('confirmPassword').value; // Get the value entered in the confirm password field
    const password = document.getElementById('password').value; // Get the value entered in the password field
    const errorMessage = document.getElementById('confirmPasswordError'); // Get the error message element for confirm password
    
    if (confirmPassword !== password) { // Check if confirm password matches the password
        errorMessage.innerText = "Passwords do not match."; // Display error message
    } else {
        errorMessage.innerText = ""; // Clear the error message if the input is valid
    }
}

// Main form submission validation
function validateForm() {
    // Triggering validation on form submit for all fields
    validateFullName();
    validateEmail();
    validatePhoneNumber();
    validatePassword();
    validateConfirmPassword();

    // Check if there are any error messages displayed
    const errorMessages = document.querySelectorAll('.error');
    for (let i = 0; i < errorMessages.length; i++) {
        if (errorMessages[i].innerText !== "") { // If any error message is not empty, stop form submission
            return false; // Prevent form submission if there's an error
        }
    }
    return true; // Allow form submission if no errors
}