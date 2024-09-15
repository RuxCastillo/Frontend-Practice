const botones = document.querySelectorAll('.botones');

botones.forEach((x) => {
	x.addEventListener('click', () => {
		const padre = x.parentNode;
		padre.classList.toggle('active');
	});
});
