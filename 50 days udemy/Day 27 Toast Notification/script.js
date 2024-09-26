const button = document.querySelector('.btn');
const toast = document.querySelector('#toast');

const messages = [
	'mensaje uno',
	'mensaje dos',
	'mensaje tres',
	'mensaje cuatro',
];

button.addEventListener('click', () => {
	const notificacion = document.createElement('div');
	notificacion.classList.add('toast');

	notificacion.innerText = randomMensaje();
	toast.appendChild(notificacion);

	setTimeout(() => {
		notificacion.remove();
	}, 3000);
});

function randomMensaje() {
	return messages[Math.floor(Math.random() * messages.length)];
}
