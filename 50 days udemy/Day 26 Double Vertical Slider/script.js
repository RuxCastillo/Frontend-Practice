const container = document.querySelector('.container');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const down = document.querySelector('.down');
const up = document.querySelector('.up');
const slidesLength = document.querySelectorAll('.right div').length;

let activeSlide = 0;

left.style.top = `-${(slidesLength - 1) * 100}vh`;

up.addEventListener('click', () => movimiento('up'));
down.addEventListener('click', () => movimiento('down'));

function movimiento(x) {
	const heigthClient = container.clientHeight;
	if (x === 'up') {
		activeSlide++;
		if (activeSlide > slidesLength - 1) {
			activeSlide = 0;
		}
	} else if (x === 'down') {
		activeSlide--;
		if (activeSlide < 0) {
			activeSlide = slidesLength - 1;
		}
	}

	left.style.transform = `translateY(${heigthClient * activeSlide}px)`;
	right.style.transform = `translateY(-${heigthClient * activeSlide}px)`;
}
