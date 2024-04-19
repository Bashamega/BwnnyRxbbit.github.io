const passwordBox = document.getElementById('passwordBox');
const secretText = document.getElementById('secretText');

function checkPassword() {
    if (passwordBox.value == "sihan") {
        secretText.innerHTML = "Follow me on instagram now! https://www.instagram.com/sihanpathiraja/ <:)";
    } else {
        secretText.innerHTML = "Wrong Password!";
        passwordBox.value == "";
    }
}