const numero = document.querySelector(".container")
const imagen = document.querySelector("body img")

let codigo = setInterval(acelerador, 30)

let cuenta = 0;

function acelerador() {
    if(cuenta < 100) {
        cuenta++
        numero.innerHTML = cuenta + "%";
        imagen.style.filter = `blur(${scale(cuenta, 0, 100, 30, 0)}px)`
        console.log(scale(cuenta, 0, 100, 30, 0))
    } else {
        clearInterval(codigo)
        numero.style.display = "none";
        //imagen.style.filter = "blur(0)"

    }
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}