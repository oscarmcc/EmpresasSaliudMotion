document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.icon_menu');
    const menuAside = document.querySelector('.menu_aside');

    menuButton.addEventListener('click', () => {
        menuAside.classList.toggle('show');
    });

    menuAside.addEventListener('click', () => {
        menuAside.classList.remove('show');
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submission prevented.");
    });
});