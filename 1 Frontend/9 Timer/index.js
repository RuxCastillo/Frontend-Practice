class Timer {
    constructor(tiempo, play, pause, callbacks){
        this.tiempo = tiempo;
        this.play = play;
        this.pause = pause;

        if(callbacks) {
            this.setTiempo = callbacks.setTiempo;
            this.setPlay = callbacks.setPlay;
            this.setPause = callbacks.setPause; 
        }

        document.getElementsByName("pause")[0].addEventListener("click", this.pausarConteo)
        document.getElementsByName("play")[0].addEventListener("click", this.empezarConteo)
        document.getElementsByTagName("input")[0].addEventListener("click", this.seleccionoInput)
    }
    empezarConteo = () => {
        cantidadTotal = document.querySelector(".number input").value
        idInterval = setInterval(this.restandoleUno, 1000)
    }
    pausarConteo = () => {
        clearInterval(idInterval)
        document.querySelector("svg circle").setAttribute("stroke-dashoffset", 0);
    }
    seleccionoInput = () => {
        clearInterval(idInterval)
    }
    restandoleUno = () => {  
      let segundos = document.querySelector(".number input").value;
      segundos -= 1 
      document.querySelector(".number input").value = segundos;
      let cantidadQuitar = 1130/cantidadTotal
      let stroke = document.querySelector("svg circle").getAttribute("stroke-dashoffset")
      let nuevostrokeInicial =  stroke - cantidadQuitar 
      document.querySelector("svg circle").setAttribute("stroke-dashoffset", nuevostrokeInicial)
      if(segundos == 0) {
        this.pausarConteo()
      }
    }

}

let cantidadTotal = 0;
let idInterval = 0;
const reloj = new Timer(30, 40, 50, {
    setTiempo() {
        console.log("setTiempo")
    },
    setPlay() {
        console.log("setPlay")
    },
    setPause() {
        console.log("setPause")
    }
});