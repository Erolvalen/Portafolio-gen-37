// 1. Crea una función que cree un arreglo con los números del 1 al 400
function numArray() {
	let num = [];

	for (i = 1; i <= 400; i++) {
		num.push(i);
	}

	return num;
}

console.log(numArray());

// 2. Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.
const num1 = 2;
const num2 = 8;
const num3 = 3;
const num4 = 5;

function rangeArray(n1, n2) {
	const array = [];
	for (let i = n1; i <= n2; i++) {
		array.push(i);
	}
	return array;
}

console.log(rangeArray(num1, num2));
console.log(rangeArray(num3, num4));

// 3. Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos números.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeros1 = [1, 2, 3, 4, 5];
const numeros2 = [1, 2, 3];

function sumArray(arr) {
	let sum = 0;
	for (const number of arr) {
		sum += number;
	}
	return sum;
}

console.log(sumArray(numeros));
console.log(sumArray(numeros1));
console.log(sumArray(numeros2));

// El siguiente objeto se utilizará como argumento para resolver los ejercicios 4, 5, 6 y 7:
const usuarios = [
	{
		nombre: 'Erik',
		edad: 29,
		correo: 'erik@academlo.com',
		social: [
			{ nombre: 'facebook', url: 'facebook/erik' },
			{ nombre: 'twitter', url: 'twitter/erik' },
		],
		genero: 'Hombre',
	},
	{
		nombre: 'Georg',
		edad: 33,
		correo: 'georg@academlo.com',
		social: [
			{ nombre: 'facebook', url: 'facebook/georg' },
			{ nombre: 'twitter', url: 'twitter/georg' },
		],
		genero: 'Hombre',
	},
	{
		nombre: 'Andrea',
		edad: 42,
		correo: 'andrea@hotmail.com',
		social: [
			{ nombre: 'facebook', url: 'facebook/andrea' },
			{ nombre: 'twitter', url: 'twitter/andrea' },
		],
		genero: 'Mujer',
	},
	{
		nombre: 'Oscar',
		edad: 31,
		correo: 'oscar@academlo.com',
		social: [
			{ nombre: 'facebook', url: 'facebook/oscar' },
			{ nombre: 'twitter', url: 'twiter/oscar' },
		],
		genero: 'Hombre',
	},
	{
		nombre: 'Daniela',
		edad: 22,
		correo: 'andrea@uaq.mx',
		social: [
			{ nombre: 'facebook', url: 'facebook/andrea' },
			{ nombre: 'twitter', url: 'twitter/andrea' },
		],
		genero: 'Mujer',
	},
];

// 4. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con los correos de los usuarios.
function emailArray(arr) {
	const usersEmail = [];

	for (const obj of arr) {
		console.log(obj.correo);
		usersEmail.push(obj.correo);
	}

	return usersEmail;
}

console.log(emailArray(usuarios));

// 5. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todas las urls de las cuentas de facebook.
function listUrlsF(arr) {
	const facebookURL = [];
	// for (let i = 0; i < arr.length; i++) {
	// 	facebookURL.push(arr[i].social[0].url);
	// }
	for (const user of arr) {
		facebookURL.push(user.social[0].url);
	}
	return facebookURL;
}

console.log(listUrlsF(usuarios));

function urlsFb(arr) {
	const urlsList = [];

	for (const user of arr) {
		for (const url of user.social) {
			if (url.nombre === 'facebook') {
				console.log(url);
				urlsList.push(url.url);
			}
		}
	}

	return urlsList;
}

console.log(urlsFb(usuarios));

// 6. Crea una función que reciba como parámetros un arreglo de usuarios dos propiedades (nombre, genero), y retorne un arreglo con todos los géneros de los usuarios con su nombre, ejemplo: 'Erik: Hombre'.
function getGender(arr) {
	const nameG = [];
	for (let i = 0; i < arr.length; i++) {
		nameG.push(`${arr[i].nombre}: ${arr[i].genero}`);
	}
	return nameG;
}
console.log(getGender(usuarios));

function getGender1(arr, prop, prop2) {
	const nameG = [];
	for (const user of arr) {
		nameG.push(`${user[prop]}: ${user[prop2]}`);
	}
	return nameG;
}
console.log(getGender1(usuarios, 'nombre', 'genero'));

// 7. Crea una función que reciba como parámetro un arreglo de usuarios y retorne la suma de todas las edades de los usuarios.

function sumAges(arr) {
	let userAges = 0;
	for (const user of arr) {
		userAges += user.edad;
	}
	return userAges;
}
console.log(sumAges(usuarios));

// 8. Crea una función que reciba un objeto como parámetro e itere con for..in sobre las propiedades y sume sus valores:
const obj = {
	a: 1,
	b: 2,
	c: 3,
};

console.log(obj['b']);

function sumObj(objet) {
	let sum = 0;
	for (let obj1 in objet) {
		console.log(obj1);
		sum += objet[obj1];
	}
	return sum;
}
console.log(sumObj(obj));

// 9. Crea una función que recibs un objeto como parámetro e itere con for..in sobre las propiedades y las pinte guarde en un array, tanto nombre como población, por ejemplo: La población de Londres es de 8981 mil habitantes.
const poblacion = {
	Londres: 8981,
	París: 2141,
	Madrid: 3223,
	Berlín: 3769,
	Roma: 2871,
};

function poblationCity(city) {
	const totalByCity = [];
	for (let data in city) {
		totalByCity.push(
			`La población de ${data} es de ${city[data]} mil habitantes.`,
		);
	}
	return totalByCity;
}

const myTotal = poblationCity(poblacion);
console.log(poblationCity(poblacion));
console.log(myTotal);
