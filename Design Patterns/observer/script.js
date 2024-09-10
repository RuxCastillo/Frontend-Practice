class Subject {
	constructor() {
		this.suscriptores = [];
	}
	suscribirse(sub) {
		this.suscriptores.push(sub);
		console.log(this.suscriptores);
	}
	desuscribirse(sub) {
		this.suscriptores = this.suscriptores.filter((e) => e !== sub);
		console.log(this.suscriptores);
	}
	notify(actualizacion) {
		this.suscriptores.forEach((element) => {
			element.refresh(actualizacion);
		});
	}
}

class Observer1 {
	constructor(num) {
		this.num = num;
	}
	refresh(info) {
		this.num += info;
		console.log(this.num);
	}
}

class Observer2 {
	constructor(bool) {
		this.bool = bool;
	}
	refresh() {
		this.bool = !this.bool;
		console.log(this.bool);
	}
}

const canalYt = new Subject();
const sumador = new Observer1(30);
const darkMode = new Observer2(false);
const isEn = new Observer2(true);
canalYt.suscribirse(sumador);
canalYt.notify(5);
canalYt.suscribirse(darkMode);
canalYt.suscribirse(isEn);
canalYt.notify(-5);
canalYt.notify(-5);
canalYt.desuscribirse(darkMode);
canalYt.notify(-5);
