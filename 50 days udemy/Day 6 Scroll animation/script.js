const box = document.querySelectorAll('div');

window.addEventListener('scroll', moverCajas);

moverCajas();

function moverCajas() {
	const tamañoDelHeight = (window.innerHeight / 5) * 4;

	box.forEach((b) => {
		const distancia = b.getBoundingClientRect().top;

		if (distancia < tamañoDelHeight) {
			b.classList.add('static');
		} else {
			b.classList.remove('static');
		}
	});
}
