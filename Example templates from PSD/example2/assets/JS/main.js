/* Burger Icon click */
const body = document.querySelector("body");
const burger_icon = document.querySelector('.burger');
const menuMobile = document.querySelector(".mobile_menu");
burger_icon.addEventListener('click', (event) => {
    burger_icon.classList.toggle("open");
    menuMobile.classList.toggle("open");
    body.classList.toggle("open_menu");
});

/* Menu Bar closing in size more than 992px */

const screenSize = window.matchMedia('(min-width: 992px)');

screenSize.addEventListener('change', (e) => {
    if (e.matches) {
        menuMobile.setAttribute('class', "mobile_menu");
        burger_icon.setAttribute('class', 'burger')
    }
});
