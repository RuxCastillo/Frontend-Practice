var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imagenPlayer1 = "dice" + randomNumber1 + ".png";
var dicePlayer1 = document.querySelector(".img1").setAttribute("src", "./images/" + imagenPlayer1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imagenPlayer2 = "dice" + randomNumber2 + ".png";
var dicePlayer2 = document.querySelector(".img2").setAttribute("src", "./images/" + imagenPlayer2);

var resultado = "";

if ( randomNumber1 === randomNumber2) {
	resultado = "¡Empate!" 
}else if (randomNumber1 > randomNumber2) {
	resultado = "🚩¡Player 1 Gano!"
} else resultado = "¡Player 2 Gano! 🚩"


var titulo = document.querySelector("h1").textContent = resultado;
