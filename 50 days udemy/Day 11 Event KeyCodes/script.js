const body = document.querySelector('body');

window.addEventListener('keydown', (e) => {
	body.innerHTML = `
        
		<div class="key">
			${e.key === ' ' ? 'Space' : e.key}
			<p class="title">event.key</p>
		</div>
		<div class="key">
			${e.keyCode}
			<p class="title">event.keyCode</p>
		</div>
		<div class="key">
            ${e.code}
			<p class="title">event.code</p>
		</div>

        `;
});
