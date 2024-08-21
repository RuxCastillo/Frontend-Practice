const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const bluebar = document.querySelector(".progress-bar")
const allNum = document.querySelectorAll(".num")

let contador = 1;

next.addEventListener("click", siguienteNumero);
prev.addEventListener("click", numeroPrevio)

function siguienteNumero() {
    console.log("siguiente", contador)
    if(contador === 4) {
        next.style.cursor = "not-allowed"
        return;
    }
    next.style.cursor = "pointer"
    prev.style.cursor = "pointer"

    allNum[contador].classList.add("active")
    contador++

    bluebar.style.width = (contador-1) * 33 + "%"

}

function numeroPrevio() {
    console.log("anterior", contador)
    if(contador === 1) {
        prev.style.cursor = "not-allowed";
        return;
    }
    contador--
    allNum[contador].classList.remove("active")
    bluebar.style.width = (contador-1) * 33 + "%"
}


