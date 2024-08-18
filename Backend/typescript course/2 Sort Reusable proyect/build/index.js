"use strict";
class Acomodador {
    constructor(arrayASortear) {
        this.arrayASortear = arrayASortear;
    }
    sort() {
        const { length } = this.arrayASortear;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.arrayASortear[j] > this.arrayASortear[j + 1]) {
                    let temp = this.arrayASortear[j];
                    this.arrayASortear[j] = this.arrayASortear[j + 1];
                    this.arrayASortear[j + 1] = temp;
                }
            }
        }
    }
}
const nuevoAcomodador = new Acomodador([2, -5, 10, 50]);
nuevoAcomodador.sort();
console.log(nuevoAcomodador.arrayASortear);
