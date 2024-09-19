const smallCups = document.querySelectorAll('.cup-small');
const cup = document.querySelector('.cup-big');
const faltante = document.querySelector('.faltante');
const lleno = document.querySelector('.lleno');

updateCup();

smallCups.forEach((smallCup, idx) => {
	smallCup.addEventListener('click', () => vasoTomado(idx));
});

function vasoTomado(idx2) {
	console.log(idx2);
	if (
		smallCups[idx2].classList.contains('drink') &&
		!smallCups[idx2].nextElementSibling.classList.contains('drink')
	) {
		idx2--;
	}

	smallCups.forEach((smallCup, idx3) => {
		if (idx3 <= idx2) smallCup.classList.add('drink');
		else smallCup.classList.remove('drink');
	});

	updateCup();
}

function updateCup() {
	const vasosllenos = document.querySelectorAll('.drink');

	if (vasosllenos.length === 0) {
		lleno.style.visibility = 'hidden';
	} else {
		lleno.style.visibility = 'visible';
		lleno.style.height = (vasosllenos.length * 100) / 8 + '%';
		lleno.children[0].innerText = (vasosllenos.length * 100) / 8 + '%';
	}

	if (vasosllenos.length === smallCups.length) {
		faltante.style.display = 'none';
	} else {
		faltante.style.display = 'flex';
		faltante.children[0].innerText = `${
			2 - (250 * vasosllenos.length) / 1000
		}L`;
	}
}
