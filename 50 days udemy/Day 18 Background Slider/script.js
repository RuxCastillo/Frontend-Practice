const nextButton = document.querySelector('.right');
const prevButton = document.querySelector('.left');
const body = document.querySelector('body');
const pics = document.querySelectorAll('.pic');

let activeSlide = 0;

setBackground();

function setBackground() {
	body.style.backgroundImage = pics[activeSlide].style.backgroundImage;
}

function activeSlideClass() {
	pics.forEach((element) => element.classList.remove('active'));
	pics[activeSlide].classList.add('active');
}

function next() {
	activeSlide++;

	if (activeSlide >= pics.length) {
		activeSlide = 0;
	}

	activeSlideClass();
	setBackground();
}

function prev() {
	activeSlide--;
	if (activeSlide < 0) {
		activeSlide = pics.length - 1;
	}
	activeSlideClass();
	setBackground();
}

nextButton.addEventListener('click', next);
prevButton.addEventListener('click', prev);
