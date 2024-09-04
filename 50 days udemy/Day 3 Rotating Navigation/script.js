const page = document.querySelector(".container-page")
const circle = document.querySelector(".container-circle")
const navbar = document.querySelector(".navbar")

circle.addEventListener("click", moveAll)

function moveAll() {
    page.classList.toggle("active-page")
    circle.classList.toggle("active-circle")
    navbar.classList.toggle("active-navbar")
}