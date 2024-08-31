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
        poniendoActive()
        return
    } else if (contador < 2) {
        return
    }
    contador--
    siguiente.classList.remove("block")
    anterior.classList.remove("block")

    poniendoActive()
    console.log(contador)
}

function botonSiguiente() {
    if(contador === 3) {
        contador++
        siguiente.classList.add("block")
        poniendoActive()
        return
    } else if (contador > 3) {
        return
    }
    contador++
    anterior.classList.remove("block")
    siguiente.classList.remove("block")
    poniendoActive()

    console.log(contador)
}

function poniendoActive() {

    numbers.forEach((x) => {
        x.classList.remove("active")
    })
    
    for(let i = 0; i < contador; i++) {
        numbers[i].classList.add("active")
    }

    coloreandoLinea()

}

function coloreandoLinea() {
    let lineAfter = document.querySelector(".barra-llena")
    let linea = contador - 1;
    let porcentaje = (33 * linea) + "%"
    lineAfter.style.width = porcentaje;
}

