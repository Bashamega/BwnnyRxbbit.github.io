const passwordBox = document.getElementById('passwordBox');
const secretText = document.getElementById('secretText');

function checkPassword() {
    if (passwordBox.value == "sihan") {
        secretText.innerHTML = "Hello from Sihan!";
    } else {
        secretText.innerHTML = "Wrong Password!"
    }
}