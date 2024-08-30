const anterior = document.querySelector(".anterior")
const siguiente = document.querySelector(".siguiente")
const numbers = document.querySelectorAll(".number")
const line = document.querySelector(".line")

contador = 1;

anterior.addEventListener("click", botonAnterior)
siguiente.addEventListener("click", botonSiguiente)

function botonAnterior() {
    if(contador === 2) {
        contador--
        anterior.classList.add("block")
        return
    }
    contador--
    siguiente.classList.remove("block")
    anterior.classList.remove("block")

    console.log(contador)
}

function botonSiguiente() {
    if(contador === 3) {
        contador++
        siguiente.classList.add("block")
        return
    }
    contador++
    anterior.classList.remove("block")
    siguiente.classList.remove("block")

    console.log(contador)
}

function poniendoActive() {

    

}


