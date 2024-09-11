console.log('hola');

const controlForm = document.querySelectorAll('.control-form');
const label = document.querySelectorAll('label');

controlForm[0].addEventListener('click', moviendoLetras);

function moviendoLetras() {
	label.forEach((letters) => {
		let letra = letters.innerText.split('');
		console.log(letra);
		let string;
		let contador = 0;
		string = letra.map((l) => {
			contador++;
			return `<span style="transition-delay:${contador * 100}ms;">${l}</span>`;
		});
		console.log(string);
		string = string.join('');
		console.log(string);
		letters.innerHTML = string;
	});
}
