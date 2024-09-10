const play = document.querySelector('#play');
const xbox = document.querySelector('#xbox');
const container = document.querySelector('body');

function agrandar(consol) {
	console.log(consol);
	container.classList = '';
	container.classList.add(consol);
}

play.addEventListener('mouseenter', () => agrandar('left'));
xbox.addEventListener('mouseenter', () => agrandar('right'));
