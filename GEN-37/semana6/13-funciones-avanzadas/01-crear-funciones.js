/************************************/
/* FUNCTION ==> Funciones Avanzado */
/***********************************/

function a() {
	console.log('Mostrar mensaje');
}

a();

const b = a;
b();

const argument1 = 'argumento 1';
const argument2 = 'argumento 2';

// funcion declarada
nombredelafuncion(argument1, argument2);
function nombredelafuncion(param1, param2) {
	console.log(param1, param2);
}

// funciones expresadas
const nombredelafuncion2 = function (param1, param2) {
	console.log(param1, param2);
};

nombredelafuncion2(argument1, argument2);

/*************************************/
/* FUNCTION ==> Funciones de Flecha */
/************************************/

const sum = (a, b) => {
	return a + b;
};

console.log(sum(3, 5));

// podemos pasar de esto
const saludando = (nombre) => {
	const saludo = 'Hola soy ';
	return `${saludo} ${nombre}`;
};
console.log(saludando('Enma'));

// a esto
const saludando2 = (nombre) => `Hola soy ${nombre}`;
console.log(saludando2('Jean'));

/*************************************************************************/
/* FUNCTION ==> Funciones IIFE (Immediately Invoked Function Expression) */
/*************************************************************************/
(function (nombre) {
	console.log(`Hola ${nombre}`);
})('Gabriel');
// con arrow function
((nombre) => {
	console.log(`Hola ${nombre}`);
})('Jorge');

/****************************************/
/* FUNCTION ==> Funciones Constructoras */
/****************************************/
function Animalito(name, type) {
	this.name = name;
	this.type = type;

	this.sayHi = function () {
		console.log(`Hola soy un ${this.type} y me llamo ${this.name}`);
	};
}

const dog = new Animalito('Oogie', 'perro');
dog.sayHi();

const cat = new Animalito('Pelusa', 'gato');
cat.sayHi();

class Animal {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	sayHello() {
		console.log(`Hola soy un ${this.type} y me llamo ${this.name}`);
	}
}

const dog1 = new Animal('Firulais', 'perro');
dog1.sayHello();

const cat1 = new Animal('Minino', 'gato');
cat1.sayHello();
