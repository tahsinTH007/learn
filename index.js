const menuBtn = document.querySelector(".menu-btn");
const Menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");
const headerEl = document.querySelector(".header")


menuBtn.addEventListener("click", () => {
    Menu.classList.add("menu-active")
})

closeBtn.addEventListener("click", () => {
    Menu.classList.remove("menu-active");
})

window.addEventListener("scroll", () => {
    headerEl.classList.toggle("header-active" , scrollY)
})