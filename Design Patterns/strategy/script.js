class Contexto {
	constructor(estrategia) {
		this.estrategia = estrategia;
	}
	calculate(amount) {
		return this.estrategia.calculate(amount);
	}
}

class MultiplicacionXnumero {
	constructor(numero) {
		this.numero = numero;
	}
	calculate(nuevoNumero) {
		return this.numero * nuevoNumero;
	}
}

class RestarXnumero {
	constructor(numero) {
		this.numero = numero;
	}
	calculate(nuevoNumero) {
		return this.numero - nuevoNumero;
	}
}

const tablaMultiplicar6 = new MultiplicacionXnumero(6);

const elQueLosJunta = new Contexto(tablaMultiplicar6);

let multiplicando = elQueLosJunta.calculate(5);

console.log(multiplicando);

console.log(elQueLosJunta.calculate(8));

const restar6 = new RestarXnumero(30);
elQueLosJunta.estrategia = restar6;
console.log(elQueLosJunta.calculate(3));
console.log(elQueLosJunta.calculate(10));

elQueLosJunta.estrategia = tablaMultiplicar6;
console.log(elQueLosJunta.calculate(3));
console.log(elQueLosJunta.calculate(10));
