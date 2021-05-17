/* Burger Menu */

const burgerToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const burgerItem = document.querySelectorAll('#burger__item');

burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.toggle('active');
    nav.classList.toggle('show');
    burgerItem.forEach((e) => {
        e.classList.toggle('white');
    })
});