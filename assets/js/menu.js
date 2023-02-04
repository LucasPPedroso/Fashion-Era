const openMenuBtn = document.querySelector(".menu-btn")
const headerMenu = document.querySelector(".header-menu")

openMenuBtn.addEventListener("click", openMenu);

function openMenu() {
    openMenuBtn.classList.toggle("active");
    headerMenu.classList.toggle("menu-active");
    document.querySelector("body").classList.toggle("overflow-hidden");
}

