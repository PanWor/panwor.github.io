function generatePassword() {
    // Get the user-selected configurations
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
const symbols = document.getElementById('symbols').checked;

// Create a list of characters to be used based on the configurations
let chars = '';
if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if (lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
if (numbers) chars += '0123456789';
if (symbols) chars += '!@#$%^&*()_+{}[]|\\;:\'",./<>?';

// Generate a random password using the selected characters and length
let password = '';
for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
}

// Display the generated password on the web page
document.getElementById('password').value = password;
}

function copyPassword() {
// Copy the generated password to the clipboard
const password = document.getElementById('password');
password.select();
document.execCommand('copy');
// Update the button text to indicate that the password has been copied
const copyBtn = document.getElementById('copy-btn');
copyBtn.innerHTML = 'Copied!';
setTimeout(() => { copyBtn.innerHTML = 'Copy to Clipboard'; }, 3000);
}