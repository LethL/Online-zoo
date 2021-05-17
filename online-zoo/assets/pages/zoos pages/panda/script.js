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
    })
}

checkHeader();



// Aside Menu Sliders

const sidebarSlider = document.getElementById('sidebar__slider');
const sidebarSliderBtn = document.getElementById('sidebar__btn');
let sidebarOffset = 0;

sidebarSliderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sidebarOffset += 172;
    if (sidebarOffset > 688) {
        sidebarOffset = 0;
    }
    sidebarSlider.style.top = -sidebarOffset + 'px';
});

const menuSlider = document.getElementById('menu__slider');
const menuSliderBtn = document.getElementById('menu__btn');
let menuOffset = 0;

menuSliderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menuOffset += 171;
    if (menuOffset > 684) {
        menuOffset = 0;
    }
    menuSlider.style.top = -menuOffset + 'px';
});


// Videos

const mainCamBlock = document.getElementById('main__cam-block');
const mainCam = document.getElementById('main__cam');
const firstCam = document.getElementById('first__cam');
const firstCamBlock = document.getElementById('first__cam-block');
const secondCamBlock = document.getElementById('second__cam-block');
const secondCam = document.getElementById('second__cam');
const thirdCam = document.getElementById('third__cam');
const thirdCamBlock = document.getElementById('third__cam-block');
const cams = document.querySelectorAll('iframe');


mainCamBlock.addEventListener('click', () => {
    if (mainCam.classList.contains('active-two') || 
    mainCam.classList.contains('active-third')) {
        mainCam.classList.remove('active-two');
        mainCam.classList.remove('active-third');
        cams.forEach(e => e.classList.remove('active'));
    } else {
        mainCam.classList.toggle('active');
        firstCam.classList.toggle('active');
    }
});

firstCamBlock.addEventListener('click', () => {
    if (mainCam.classList.contains('active-two') || 
    mainCam.classList.contains('active-third')) {
        mainCam.classList.remove('active-two');
        mainCam.classList.remove('active-third');
        cams.forEach(e => e.classList.remove('active'));
    } else {
        firstCam.classList.toggle('active');
        mainCam.classList.toggle('active');
    }
});

secondCamBlock.addEventListener('click', () => {
    if (mainCam.classList.contains('active') || 
    mainCam.classList.contains('active-third')) {
        mainCam.classList.remove('active-third');
        cams.forEach(e => e.classList.remove('active'));
    } else {
        mainCam.classList.toggle('active-two');
        secondCam.classList.toggle('active');
    }
});

thirdCamBlock.addEventListener('click', () => {
    if (mainCam.classList.contains('active') || 
    mainCam.classList.contains('active-two')) {
        mainCam.classList.remove('active-two');
        cams.forEach(e => e.classList.remove('active'));
    } else {
        mainCam.classList.toggle('active-third');
        thirdCam.classList.toggle('active');
    }
});