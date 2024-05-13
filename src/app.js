document.getElementById('darkModeToggle').addEventListener('change', function (event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.removeAttribute('data-bs-theme');
        localStorage.setItem("theme", "light");
    }
});
document.getElementById('darkModeIcon').addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    this.classList.toggle('bi-sun');
    let theme = document.documentElement.getAttribute('data-bs-theme');
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-bs-theme');
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem("theme", "dark");
    }
});
if(localStorage.getItem('theme') == "dark"){
    const icon = document.getElementById('darkModeIcon');
    icon.classList.toggle('bi-moon');
    icon.classList.toggle('bi-sun');
    let theme = document.documentElement.getAttribute('data-bs-theme');
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-bs-theme');
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem("theme", "dark");
    }
}