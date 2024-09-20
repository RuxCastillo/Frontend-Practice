const API_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8ee4220660bd722b46fa8095b0c42715&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=8ee4220660bd722b46fa8095b0c42715&query="';

const form = document.querySelector('form');
const search = document.querySelector('form input');
const main = document.querySelector('main');

getMovies(API_URL);

async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();

	insertandoMovies(data.results);
}

function insertandoMovies(data) {
	console.log(data);
	main.innerHTML = '';
	data.forEach(({ title, poster_path, vote_average, overview }) => {
		const createMovie = document.createElement('div');
		createMovie.classList.add('card');
		createMovie.innerHTML = `
				<img src="${IMG_PATH + poster_path}" />
				<h3>${title}</h3>
				<span class=${getMovieColor(vote_average)}>${vote_average}</span>
				<div class="absolute">
					<h4>Overview</h4>
					<p>${overview}
					</p>
				</div>`;
		main.appendChild(createMovie);
	});
}

function getMovieColor(num) {
	if (num >= 8.5) {
		return 'green';
	} else if (num >= 7) {
		return 'orange';
	} else {
		return 'red';
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const searchTerm = search.value;

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_API + searchTerm);

		search.value = '';
	} else {
		window.location.reload();
	}
});
