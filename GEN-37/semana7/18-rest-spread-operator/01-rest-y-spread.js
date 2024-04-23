/*************************************/
/* REST & SPREAD ==> Parámetros Rest */
/*************************************/

function sum(a, b) {
	return a + b;
}

console.log(sum(1, 2, 3, 4, 5));

// Con arguments
function suma(a, b) {
	console.log(arguments);
	let sum = 0;

	for (const num of arguments) {
		console.log(num);
		sum += num;
	}

	return sum;
}

console.log(suma(1, 2, 3, 4, 5));

// arguments con funciones flecha

const sumar = (a, b) => {
	console.log(arguments);
	let sum = 0;

	for (const num of arguments) {
		console.log(num);
		sum += num;
	}

	return sum;
};

console.log(sumar(1, 2, 3, 4, 5));

// ...rest
function sumaRest(...rest) {
	console.log(rest);

	let sum = 0;

	for (const num of rest) {
		console.log(num);
		sum += num;
	}

	return sum;
}

console.log(sumaRest(1, 2, 3, 4, 5));

// rest con funciones flecha
const sumaResta = (...rest) => {
	console.log(rest);

	let sum = 0;

	for (const num of rest) {
		console.log(num);
		sum += num;
	}

	return sum;
};

console.log(sumaResta(1, 2, 3, 4, 5));

function showName(...rest) {
	console.log(rest);
	// return `${myName} ${myLastName}`;
}

console.log(
	showName(
		[1, 2, 3],
		'Juan',
		'Gachancipa',
		20,
		'myemaci@gmail.com',
		'Colombia',
		{ a: 1, b: 2 },
	),
);
/*************************************/
/* REST & SPREAD ==> Operador Spread */
/*************************************/

console.log(Math.max(1, 20, 3, 4, 5)); // 20

const numbers = [1, 2, 3, 4, 5];

const result = Math.max(...numbers); // 1, 20, 3, 4, 5
console.log(result);
// console.log(...numbers)

const moreNumbers = [7, 8, 9, 10, 11];

console.log(0, ...numbers, 6, ...moreNumbers);

const names = ['Gabriel', 'Cristian', 'Mateo'];
const names1 = ['Victor', 'Ismael', 'Jhon'];

const groupNames = [...names, ...names1];
console.log(groupNames);

console.log(...'Javascript');
console.log(...'Javascript'[0]);

const arr = [1, 2, 3];
const copia = arr.slice();
console.log(copia);
const copia2 = [...arr];
console.log(copia2);

const obj = { a: 1, b: 2, c: 3 };
const objCopy = { ...obj };
console.log(objCopy);

// Ejemplo con ejercicio 2 del examen de Replit
const arr1 = [8, 9, 10, 12];
const arr2 = [50, 60, 70, 1, 2, 3];
const arr3 = [10, 20, 30];

function sumArrays(spread1, spread2, spread3) {
	console.log(...spread1, ...spread2, ...spread3);
	return [...spread1, ...spread2, ...spread3].reduce((acc, num) => acc + num);
}

console.log(sumArrays(arr1, arr2, arr3));
