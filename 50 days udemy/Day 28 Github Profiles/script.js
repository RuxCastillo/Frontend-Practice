const APIURL = 'https://api.github.com/users/';

const main = document.querySelector('.main');
const form = document.querySelector('.user-form');
const search = document.querySelector('.search');

async function getUser(username) {
	try {
		const { data } = await axios(APIURL + username);
		createUserCard(data);
		getRepos(username);
	} catch (err) {
		if (err.response.status === 404) {
			createErrorCard('No hay perfiles con este nombre de usuario');
		}
	}
}

async function getRepos(username) {
	try {
		const { data } = await axios(APIURL + username + '/repos?sort=created');
		addReposToCard(data);
	} catch (err) {
		createErrorCard('Problema al hacer fetch a los repos');
	}
}

function createUserCard(user) {
	const cardHTML = `
			<div class="card">
				<div>
					<img
						src="${user.avatar_url}"
						alt="user"
						class="avatar"
					/>
				</div>
				<div class="user-info">
					<h2>${user.name}</h2>
					<p>
						${user.bio}
					</p>

					<ul>
						<li>${user.followers} <strong>Followers</strong></li>
						<li>${user.following} <strong>Following</strong></li>
						<li>${user.public_repos} <strong>Repos</strong></li>
					</ul>

					<div class="repos">
					</div>
				</div>
			</div>`;

	main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
	const cardHTML = `
    <div class="card">
    <h2>${msg}</h2></div>`;
	main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
	const reposel = document.querySelector('.repos');

	repos.slice(0, 5).forEach((element) => {
		const repoLink = document.createElement('a');
		repoLink.classList.add('repo');
		repoLink.href = element.html_url;
		repoLink.target = '_blank';
		repoLink.innerText = element.name;
		reposel.appendChild(repoLink);
	});
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const user = search.value;

	if (user) {
		getUser(user);
		search.value = '';
	}
});
