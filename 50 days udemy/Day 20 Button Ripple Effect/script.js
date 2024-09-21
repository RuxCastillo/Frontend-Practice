const button = document.querySelector('button');

button.addEventListener('click', function (event) {
	const x = event.clientX;
	const y = event.clientY;

	const topButton = event.target.offsetTop;
	const leftButton = event.target.offsetLeft;

	const paraElCeroX = x - leftButton;
	const paraElCeroY = y - topButton;

	let elSpan = document.createElement('span');
	elSpan.classList.add('circle');
	elSpan.style.top = paraElCeroY + 'px';
	elSpan.style.left = paraElCeroX + 'px';

	this.appendChild(elSpan);

	setInterval(() => {
		elSpan.remove();
	}, 1000);
});
