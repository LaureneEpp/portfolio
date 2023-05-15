// get all the links
const toggleMenuBtn = document.querySelector('#menu-btn');
const toggleMenuImg = document.querySelector('#menu-btn svg');
const toggleCloseImg = document.querySelector('.close');
const toggleMenu = document.querySelector('#toggled-menu');
const menuLinks = document.querySelector('#main-nav ul a');


toggleMenuBtn.addEventListener('click', toggleNav);

function toggleNav() {
    toggleMenu.classList.toggle("-translate-y-full")

    if (toggleMenu.classList.contains("-translate-y-full")) {
        toggleCloseImg.classList.add('hidden')
        toggleMenuImg.classList.remove('hidden')
        toggleMenuBtn.setAttribute("aria-expanded:", false)
    } else {
        toggleCloseImg.classList.remove('hidden')
        toggleMenuImg.classList.add('hidden')
        toggleMenuBtn.setAttribute("aria-expanded:", true)
    }
}
console.log("Test for Menu")