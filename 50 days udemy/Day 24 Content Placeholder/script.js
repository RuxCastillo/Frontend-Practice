const card__header = document.querySelector('.card__header');
const card__title = document.querySelector('.card__title');
const card__excerpt = document.querySelector('.card__excerpt');
const imagen = document.querySelector('.imagen');
const strong = document.querySelector('strong');
const small = document.querySelector('small');

const animacion = document.querySelectorAll('.animacion');
const animacion_texto = document.querySelectorAll('.animacion-texto');

setTimeout(getData, 2500);

function getData() {
	card__header.innerHTML =
		'<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
	card__title.innerHTML = 'Lorem ipsum dolor sit amet';
	card__excerpt.innerHTML =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
	imagen.innerHTML =
		'<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
	strong.innerHTML = 'John Doe';
	small.innerHTML = 'Oct 08, 2020';

	animacion.forEach((bg) => bg.classList.remove('animacion'));
	animacion_texto.forEach((bg) => bg.classList.remove('animacion-texto'));
}
