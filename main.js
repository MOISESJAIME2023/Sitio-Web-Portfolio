const toggle = document.querySelector(".toggle")
const links = document.querySelector(".links")
const home = document.querySelector(".home")
const nombre = document.querySelector(".nombre-moises")


toggle.addEventListener("click", () => {
    toggle.classList.toggle("rotate")
    links.classList.toggle("active")
    home.classList.toggle("web")
    nombre.classList.toggle("bar")
})
