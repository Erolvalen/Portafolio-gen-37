// 1- Encuentra a las mascotas que tienen dueño
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

function getPets(pets) {
	const petsWithOwner = [];

	for (const pet of pets) {
		console.log(pet);
		if (pet.petOwner) {
			console.log(pet);
			petsWithOwner.push(pet);
		}
	}

	return petsWithOwner;
}

console.log(getPets(pets));

// 2- Crea una función con dos parámetros donde el primer parámetro sea la edad menor y el segundo parámetro la edad mayor del siguiente objeto. De ese rango toma los números pares y retorna la suma de los números pares que se encuentren en ese rango, pero sin incluir las dos edades enviadas por argumentos.

const usuarios = [
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

function rangeOfAge(age, age2) {
	let sum = 0;

	console.log(age);
	console.log(age2);

	for (let index = age + 1; index < age2; index++) {
		if (!(index % 2)) {
			console.log(index);
			sum += index;
		}
	}

	return sum;
}

console.log(rangeOfAge(usuarios[0].age, usuarios[6].age));

// 3- Toma como refencia el array de usuarios anterior y crea una función con dos parámetros donde el primer parámetro sea la edad menor y el segundo parámetro el número que tú elijas. Y retorna los múltiplos del primer número (la primer edad) y el segundo número (el que tú elijas), con el rango iniciando del primer número hasta el segundo número, sin incluirlos.
function getMultiplos(age1, age2) {
	const multiplos = [];

	for (let index = age1 * 2; index < age2; index += age1) {
		console.log(index);
		multiplos.push(index);
	}

	return multiplos;
}

console.log(getMultiplos(19, 200));

// 4- Cuenta las veces que se repite una palabra de un string
const string =
	'tres tristes tigres tragaban trigo en un trigal en tres tristes trastos tragaban trigo tres tristes tigres';

function countWord(string, word) {
	const toArray = string.split(' ');
	console.log(toArray);
	const mostCommonLetter = [];

	for (const str of toArray) {
		console.log(str);
		if (str === word) {
			console.log(str);
			mostCommonLetter.push(str);
		}
	}

	console.log(mostCommonLetter);

	return mostCommonLetter.length;
}

console.log(countWord(string, 'tres'));

// 5- Encuentra las mascotas que tienen dueño y cuenta cuántas de esas mascotas con dueño van a una u otra veterinaria
const petsVet = [
	{
		name: 'Oogie',
		petOwner: null,
		vet: 'La casita',
	},
	{
		name: 'Kaiser',
		petOwner: 'Juan',
		vet: 'Paw Patrul',
	},
	{
		name: 'Koki',
		petOwner: 'Laura',
		vet: 'Paw Patrul',
	},
	{
		name: 'Tequila',
		petOwner: 'Sofia',
		vet: 'La casita',
	},
	{
		name: 'Manchas',
		petOwner: null,
		vet: 'Paw Patrul',
	},
	{
		name: 'Patitas',
		petOwner: 'Sebastian',
		vet: 'Jaulita Divina',
	},
	{
		name: 'Romeo',
		petOwner: null,
		vet: 'Quiero Family',
	},
];

function countVets(petsVet) {
	const vetsCounted = {};

	for (const pet of petsVet) {
		console.log(pet);
		if (pet.petOwner && vetsCounted[pet.vet]) {
			vetsCounted[pet.vet]++;
		} else if (pet.petOwner) {
			vetsCounted[pet.vet] = 1;
		}
	}

	return vetsCounted;
}

console.log(countVets(petsVet));

// 6- Cuenta cuántos productos(array1) son del mismo color(array2), dependiendo el color que te brinde el usuario(argumento string).
const products1 = [
	{ name: 'Falda', brand: 'Sara', id_product: 1 },
	{ name: 'Pantalón', brand: 'Patito', id_product: 2 },
	{ name: 'Blusa', brand: 'Convers', id_product: 1 },
	{ name: 'Corbata', brand: 'C&A', id_product: 2 },
	{ name: 'Sueter', brand: 'Bershka', id_product: 1 },
];

const colors = [
	{ id: 1, color: 'Azul' },
	{ id: 2, color: 'Rojo' },
];

const color = 'Azul';

function countColors(products, colors, color) {
	let totalPorducts = 0;

	for (const product of products) {
		for (const myColor of colors) {
			if (product.id_product === myColor.id && myColor.color === color) {
				console.log(product);
				console.log(myColor);
				totalPorducts++;
			}
		}
	}

	return totalPorducts;
}

console.log(countColors(products1, colors, color));
