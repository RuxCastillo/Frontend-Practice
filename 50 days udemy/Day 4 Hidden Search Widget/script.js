const lupa = document.querySelector(".lupa")
const search = document.querySelector("input")

lupa.addEventListener("click", () => {
    search.classList.toggle("hide")
})