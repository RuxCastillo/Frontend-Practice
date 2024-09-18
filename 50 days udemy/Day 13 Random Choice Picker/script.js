const options = document.querySelector('.options');
const textarea = document.querySelector('#textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') {
		inicioRandom();
		setTimeout(() => {
			textarea.value = '';
		}, 200);
	}

	agregandoLi(e.target.value);
});

function agregandoLi(x) {
	let arr = x.split(',');
	arr = arr.filter((word) => word.trim() !== '');
	arr = arr.map((element) => element.trim());

	options.innerHTML = '';

	arr.forEach((element) => {
		let nuevo = document.createElement('li');
		nuevo.innerText = element;
		nuevo.classList.add('inventada');
		options.appendChild(nuevo);
	});
}

function inicioRandom() {
	console.log('inicia inicioRamdon');
	const vueltas = 30;

	let primero = setInterval(() => {
		const listaNodos = document.querySelectorAll('li');
		const choosenOne = Math.floor(Math.random() * listaNodos.length);
		seleccionado(listaNodos[choosenOne]);
		quitarSeleccionado(listaNodos[choosenOne]);
	}, 100);

	setTimeout(() => {
		const listaNodos = document.querySelectorAll('li');
		clearInterval(primero);
		const choosenOne = Math.floor(Math.random() * listaNodos.length);
		seleccionado(listaNodos[choosenOne]);
	}, 100 * vueltas);
}

function seleccionado(element) {
	element.classList.add('escogido');
	console.log('agrego', element);
}

function quitarSeleccionado(element) {
	setTimeout(() => {
		element.classList.remove('escogido');
		console.log('quito', element);
	}, 100);
}
