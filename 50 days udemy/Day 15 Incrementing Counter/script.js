const counters = document.querySelectorAll('.counter');

counters.forEach((count) => {
	count.innerText = '0';

	const updateCounter = () => {
		const target = +count.getAttribute('data-target');
		const c = +count.innerText;

		const increment = target / 200;

		if (c < target) {
			count.innerText = `${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 1);
		} else {
			count.innerText = target;
		}
	};

	updateCounter();
});
