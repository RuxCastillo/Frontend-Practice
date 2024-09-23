const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const menos = document.querySelector('.menos');
const mas = document.querySelector('.mas');
const tamañoEl = document.querySelector('.tamaño');
const colorEl = document.querySelector('.color');
const X = document.querySelector('.limpiar');

let tamaño = 10;
let isPressed = false;
colorEl.value = 'black';
let color = colorEl.value;
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
	isPressed = true;

	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
	isPressed = false;

	x = undefined;
	y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
	if (isPressed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;

		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);

		x = x2;
		y = y2;
	}
});

function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, tamaño, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = tamaño * 2;
	ctx.stroke();
}

function cambiarTamaño() {
	tamañoEl.innerText = tamaño;
}

mas.addEventListener('click', () => {
	tamaño += 5;

	if (tamaño > 50) {
		tamaño = 50;
	}

	cambiarTamaño();
});

menos.addEventListener('click', () => {
	tamaño -= 5;

	if (tamaño < 5) {
		tamaño = 5;
	}

	cambiarTamaño();
});

colorEl.addEventListener('change', (e) => (color = e.target.value));

X.addEventListener('click', () =>
	ctx.clearRect(0, 0, canvas.width, canvas.height)
);
