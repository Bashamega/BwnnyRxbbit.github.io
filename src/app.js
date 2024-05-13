const passwordBox = document.getElementById('passwordBox');
const secretText = document.getElementById('secretText');

function checkPassword() {
    if (passwordBox.value == "sihan") {
        secretText.innerHTML = "If you are seeing this, you are an hacker! Hello from Sihan!";
    } else {
        secretText.innerHTML = "Wrong Password!";
        passwordBox.value == "";
    }
}