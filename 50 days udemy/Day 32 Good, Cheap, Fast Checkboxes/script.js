const toggles = document.querySelectorAll('.toggle');
const cheap = document.querySelector('#cheap');
const good = document.querySelector('#good');
const fast = document.querySelector('#fast');

toggles.forEach((toggle) => {
	toggle.addEventListener('change', (e) => doTheTrick(e.target));
});

function doTheTrick(clicked) {
	if (good.checked && cheap.checked && fast.checked) {
		if (good === clicked) {
			fast.checked = false;
		}
		if (cheap === clicked) {
			good.checked = false;
		}
		if (fast === clicked) {
			cheap.checked = false;
		}
	}
}
