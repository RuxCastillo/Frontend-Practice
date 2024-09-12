const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const divbtn = document.querySelector('#buttons');

sounds.forEach((sonido) => {
	const btn = document.createElement('button');
	btn.classList.add('btn');

	btn.innerText = sonido;

	btn.addEventListener('click', () => {
		stopSound();
		document.getElementById(sonido).play();
	});

	document.getElementById('buttons').appendChild(btn);
});

function stopSound() {
	sounds.forEach((sound) => {
		const song = document.getElementById(sound);
		song.pause();
		song.currentTime = 0;
	});
}
