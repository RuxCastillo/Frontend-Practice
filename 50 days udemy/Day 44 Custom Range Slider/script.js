const range = document.querySelector('input');
const label = document.querySelector('label');

range.addEventListener('input', (e) => {
	let valueRange = e.target.value;
	label.innerText = valueRange;

	let valorLeftOriginal = window
		.getComputedStyle(label)
		.getPropertyValue('left');

	let range_width = window.getComputedStyle(range).getPropertyValue('width');
	let movimiento = pixelesMoviendo(+e.target.value);

	valorLeftOriginal = valorLeftOriginal.substring(
		0,
		valorLeftOriginal.length - 2
	);

	console.log(movimiento, valorLeftOriginal);

	let loQueSeDebeMover = 110 + movimiento;
	console.log(loQueSeDebeMover);

	label.style.left = loQueSeDebeMover + 'px';
});

function pixelesMoviendo(x) {
	return (x - 50) * 3;
}
