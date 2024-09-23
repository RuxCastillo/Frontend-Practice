const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (let element of empties) {
	element.addEventListener('dragover', dragOver);
	element.addEventListener('dragenter', dragEnter);
	element.addEventListener('dragleave', dragLeave);
	element.addEventListener('drop', dragDrop);
}

function dragStart() {
	console.log('drag start');
	this.className += ' hold';
	setTimeout(() => {
		this.className = 'invisible';
	}, 0);
}
function dragEnd() {
	console.log('drag end');
	this.className = 'fill';
}
function dragOver(e) {
	e.preventDefault();
	console.log('drag over');
}
function dragEnter(e) {
	e.preventDefault();
	console.log('drag enter');
	this.classList += ' holdover';
}
function dragLeave() {
	console.log('drag leave');
	this.classList = 'empty';
}
function dragDrop() {
	console.log('drag drop');
	this.className = 'empty';
	this.append(fill);
}
