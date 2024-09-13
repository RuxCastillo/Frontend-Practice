const button = document.querySelector('button');
const joke = document.querySelector('.container p');

generateJoke();

button.addEventListener('click', generateJoke);

async function generateJoke() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};

	let res = await fetch('https://icanhazdadjoke.com', config);
	let data = await res.json();

	joke.innerText = data.joke;
}
