const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');
const btn = document.querySelector('.btn');
const tiempo = document.querySelector('.tiempo');
const fecha = document.querySelector('.fecha');
const circulo = document.querySelector('.circulo');
const html = document.querySelector('html');

const daysOfWeek = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sabado',
];
const monthsOfYear = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
];

btn.addEventListener('click', theme);

function theme(e) {
	if (html.classList.contains('dark')) {
		btn.innerText = 'Dark Mode';
		html.classList.remove('dark');
	} else {
		btn.innerText = 'Light Mode';
		html.classList.add('dark');
	}
}

function setTime() {
	const time = new Date();
	const hour = time.getHours();
	const hour12 = hour % 12;
	const minute = time.getMinutes();
	const second = time.getSeconds();
	const day = time.getDay();
	const month = time.getMonth();
	const date = time.getDate();
	const ampm = hour > 11 ? 'pm' : 'am';

	hora.style.transform = `translate(-50%, -100%) rotate(${scale(
		hour12,
		0,
		11,
		0,
		360
	)}deg)`;
	minuto.style.transform = `translate(-50%, -100%) rotate(${scale(
		minute,
		0,
		59,
		0,
		360
	)}deg)`;
	segundo.style.transform = `translate(-50%, -100%) rotate(${scale(
		second,
		0,
		59,
		0,
		360
	)}deg)`;

	tiempo.innerText = `${hour12}:${minute < 9 ? '0' + minute : minute} ${ampm}`;

	fecha.innerHTML = `${daysOfWeek[day]}, ${monthsOfYear[month]} <span class='circulo'>${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
