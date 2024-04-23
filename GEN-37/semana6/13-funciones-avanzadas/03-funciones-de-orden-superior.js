/*********************************************/
/* FUNCTION ==> Funciones de Orden Superior */
/*******************************************/

// Funciones que llaman a otras funciones como argumento (Abstracción) o devuelven que devuelve otras funciones (closures)

// Abstracción
// Aquí entran los famosos métodos de orden superior
/* Estos métodos reciben tres parámetros:
callback: Función a ejecutar por cada elemento, que recibe tres argumentos:
  - elemento: El elemento actual.
  - index: El índice del elemento actual.
  - array: Es el array mismo que está siendo recorrido.
*/

const myArr = [1, 2, 3, 4];
// const metodo = {
// 	recorrer: function (arr, callback) {
// 		for (let index = 0; index < arr.length; index++) {
// 			callback(arr[index], index, arr);
// 		}
// 	},
// };

// metodo.recorrer(myArr, (element, index, array) => {
// 	console.log(element);
// 	console.log(index);
// 	console.log(array);
// });

// Array.prototype.recorrer = function (callback) {
// 	for (let index = 0; index < this.length; index++) {
// 		callback(this[index], index, this);
// 	}
// };

// myArr.recorrer((element, index, array) => {
// 	console.log(element);
// 	console.log(index);
// 	console.log(array);
// });

// recordemos cómo recorriamos un array
// for
for (let index = 0; index < myArr.length; index++) {
	console.log(myArr[index]);
}

// for of
for (const number of myArr) {
	console.log(number);
}

/*** forEach ==> Iteración: ejecuta la función indicada una vez por cada elemento del array. ***/
myArr.forEach((element, index, arr) => {
	console.log(element);
	console.log(index);
	console.log(arr);
});

// Ejemplo práctico
// Encuentra a las mascotas que tienen dueño
const pets = [
	{
		name: 'Oogie',
		petOwner: null,
	},
	{
		name: 'Kaiser',
		petOwner: 'Juan',
	},
	{
		name: 'Koki',
		petOwner: 'Laura',
	},
	{
		name: 'Tequila',
		petOwner: null,
	},
];

const petsWithOwner = [];
const petsWithoutOwnor = [];
pets.forEach((pet) =>
	pet.petOwner ? petsWithOwner.push(pet) : petsWithoutOwnor.push(pet),
);
console.log(petsWithOwner);
console.log(petsWithoutOwnor);

/*** find ==> Buscar: busca el primer elemento que cumpla con la condición indicada. Si devuelve true, la búsqueda se detiene y el item es devuelto. Si no encuentra nada, entonces devuelve undefined. ***/
const nums = [5, 12, 8, 150, 44, 12];
const finded = nums.find((number) => number === 12);
console.log(finded);

// Ejemplo práctico
const products = [
	{ id: 1, nombre: 'Camiseta', precio: 20 },
	{ id: 2, nombre: 'Zapatos', precio: 30 },
	{ id: 3, nombre: 'Sombrero', precio: 50 },
];

function findProduct(id, arr) {
	const findedProduct = arr.find((product) => product.id === id);

	if (findedProduct) {
		return `Producto encontrado: ${findedProduct.nombre} - Precio: ${findedProduct.precio}`;
	} else {
		return 'Producto no encontrado';
	}
}
console.log(findProduct(2, products));

/*** findIndex ==> Buscar Índice: es esencialmente lo mismo que find, pero devuelve el índice donde el elemento fue encontrado en lugar del elemento en sí y devuelve -1 cuando no encuentra nada. ***/

const indexFinded = nums.findIndex((number) => number === 150);
console.log(indexFinded);

// ejemplo práctico
const users = [
	{ id: 1, nombre: 'Luis', edad: 20 },
	{ id: 1, nombre: 'Manuel', edad: 40 },
	{ id: 1, nombre: 'Jhon', edad: 30 },
];

function findUser(name, arr) {
	const userFinded = arr.findIndex((user) => user.nombre === name);

	if (userFinded >= 0) {
		return `El usuario ${name} fue encontrado con éxito`;
	} else {
		return 'El usuario no fue encontrado';
	}
}

console.log(findUser('Luis', users));
console.log(findUser('Luisa', users));

/*** filter ==> Buscar todas las coincidencias: devuelve un nuevo array con todos los elementos encontrados que cumplan la condición implementada por la función dada. Si ningún elemento cumple la condición, se devolverá un array vacío. ***/
const numbersFinded = nums.filter((number) => number >= 12);
console.log(numbersFinded);

// Obten los usuarios que hayan enviado aplicación
const applicants = [
	{
		name: 'Erik',
		email: 'erik@academlo.com',
		channel: 'youtube',
		application: null,
	},
	{
		name: 'Georg',
		email: 'georg@gmail.com',
		channel: 'facebook',
		application: { country: 'Mexico', state: 'Nuevo León' },
	},
	{
		name: 'Daniela',
		email: 'daniela@gmail.com',
		channel: 'youtube',
		application: { country: 'Colombia', state: 'Bogotá' },
	},
];

function getAplications(users) {
	return users.filter((user) => user.application);
}

console.log(getAplications(applicants));

/*** map ==> Transformar: es una forma de iterar sobre un array, llama a la función para cada elemento y devolver un nuevo array con los resultados aplicados a cada uno de sus elementos de la función dada. ***/

const numbers = [1, 5, 10, 12, 15];
const doubles = numbers.map((number) => number * 2);
console.log(doubles);

// Regresa todos los correos en un arreglo
const users1 = [
	{ name: 'Erik', email: 'erik@academlo.com', age: 20 },
	{ name: 'Georg', email: 'georg@academlo.com', age: 30 },
	{ name: 'Daniel', email: 'daniel@academlo.com', age: 40 },
];

function getEmails(users) {
	return users.map((user) => user.email);
}

console.log(getEmails(users1));
console.log(users1);

/*** reduce ==> Recucir: itera sobre un array, llama a la función para cada elemento y devuelve un resultado final ***/
/* sintaxis:
arra.reduce((acumulador, elemento, index, array) => ..., valorInicial)
/* A diferencia de los métodos anteriores, reduce recibe cinco argumentos:
- elemento: El elemento actual.
- index: El índice del elemento actual.
- array: Es el array mismo que está siendo recorrido. 
- acumulador: Aquí se irá acumulando cada valor modificado en los elementos, siendo éste el valor final, el resultado
- valorInicial: Es el valor inicial del acumulador, si no se proporciona el primer elemento del array, el valor Inicial será utilizado(es opcional)*/

const sumNumbers = numbers.reduce((acc, number) => acc + number);
console.log(sumNumbers);

// Encuentra los usuarios que tienen edad par y suma sus edades
const usersAges = [
	{
		name: 'Pepe',
		age: 19,
	},
	{
		name: 'Juan',
		age: 20,
	},
	{
		name: 'Laura',
		age: 23,
	},
	{
		name: 'Kike',
		age: 26,
	},
	{
		name: 'Alejandra',
		age: 30,
	},
	{
		name: 'Sofia',
		age: 27,
	},
	{
		name: 'Luis',
		age: 50,
	},
	{
		name: 'Alberto',
		age: 41,
	},
];

function getSum(users) {
	return users.reduce(
		(acc, user) => (user.age % 2 === 0 ? acc + user.age : acc),
		0,
	);
}

console.log(getSum(usersAges));

// Cuenta las aplicaciones por canal
const estudiantes = [
	{
		name: 'Andrea',
		email: 'andrea@gmail.com',
		channel: 'youtube',
		application: null,
	},
	{
		name: 'Daniela',
		email: 'daniela@gmail.com',
		channel: 'youtube',
		application: { country: 'Colombia', state: 'Bogotá' },
	},
	{
		name: 'Alondra',
		email: 'alondra@gmail.com',
		channel: 'twitter',
		application: { country: 'Colombia', state: 'Bogotá' },
	},
	{
		name: 'Luis',
		email: 'luisa@gmail.com',
		channel: 'twitter',
		application: { country: 'México', state: 'Nuevo León' },
	},
];

function countAplicationsByChanel(students) {
	return students.reduce((acc, student) => {
		if (student.application) {
			acc[student.channel] = ++acc[student.channel] || 1;
		}
		return acc;
	}, {});
}

console.log(countAplicationsByChanel(estudiantes));

// Closures

function sayHello() {
	return function () {
		return 'Hello';
	};
}
console.log(sayHello()());

function sayHiWithName(myName) {
	return function () {
		return `Hi ${myName}`;
	};
}

const saludo = sayHiWithName('David');
console.log(saludo());

// Acumulador
function counter() {
	let contador = 0;
	function incrementar() {
		return contador++;
	}
	return incrementar;
}

const constador = counter();
console.log(constador());
console.log(constador());
console.log(constador());
console.log(constador());
console.log(constador());

const contador2 = counter();
console.log(contador2());
console.log(contador2());
console.log(contador2());
console.log(contador2());
console.log(contador2());
console.log(contador2());
