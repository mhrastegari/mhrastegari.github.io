﻿const menu = document.getElementById("menu");
const openNavMenu = document.getElementById('menu-burger');
const closeNavMenu = document.getElementById('close-menu-burger');

const onScroll = () => {
    const scroll = window.scrollY;
    const header = document.getElementById('header');
    if (!header) return;

    if (scroll > 50) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}

window.addEventListener('scroll', onScroll, { passive: true });

openNavMenu.addEventListener('click', () => {
    if (menu) menu.classList.add("visible");
});

menu.addEventListener('click', () => {
    if (menu) menu.classList.remove("visible");
});

onScroll();