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


// Side Menu

const showMenu = document.getElementById('showMenu');
const hideMenu = document.getElementById('hideMenu');
const sidebar = document.getElementById('sidebar');
const menu = document.getElementById('menu');
const header = document.getElementById('header');

showMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    menu.classList.toggle('active');
});

hideMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    menu.classList.toggle('active');
});


function checkHeader() {
    window.addEventListener('scroll', () => {
        if (pageYOffset >= 1) {
            sidebar.style.position = 'fixed';
            sidebar.style.top = '0';
            menu.style.position = 'fixed';
            menu.style.top = '0';
        } else {
            sidebar.style.position = 'absolute';
            sidebar.style.top = '110px';
            menu.style.position = 'absolute';
            menu.style.top = '110px';
        }
        console.log(pageYOffset);
    })
}

// checkHeader();