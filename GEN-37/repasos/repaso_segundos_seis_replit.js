// Obten todas las marcas de la siguiente lista de productos
const products = [
	{ name: 'Falda', brand: 'Sara', id_product: 1 },
	{ name: 'Pantalón', brand: 'Patito', id_product: 2 },
	{ name: 'Blusa', brand: 'Convers', id_product: 1 },
	{ name: 'Corbata', brand: 'C&A', id_product: 2 },
	{ name: 'Sueter', brand: 'Bershka', id_product: 1 },
];

function getBrand(products) {
	const brands = [];

	for (const product of products) {
		console.log(product);
		brands.push(product.brand);
	}

	return brands;
}

console.log(getBrand(products));

// De una lista de frutas (un arreglo), elimina la fruta que pide el usuario.
const fruits = [
	{ name: 'apple', total: 10 },
	{ name: 'grape', total: 5 },
	{ name: 'mango', total: 23 },
	{ name: 'banana', total: 4 },
	{ name: 'orange', total: 30 },
	{ name: 'mango', total: 30 },
];

function deleteFruit(arr, item) {
	const newFruits = [];

	for (const fruit of arr) {
		console.log(fruit);
		if (fruit.name !== item) {
			console.log(fruit);
			newFruits.push(fruit);
		}
	}

	return newFruits;
}

console.log(deleteFruit(fruits, 'mango'));
// console.log(deleteFruit(fruits, 'grape'));

// Tienes una bolsa de compras (array), pero quieres agregar tamaño a tus productos de esa bolsa (otro array)

const bag = [
	{ name: 'Balón', color: 'rojo' },
	{ name: 'Carrito', color: 'azul' },
	{ name: 'Muñeca', color: 'morado' },
];

console.log((bag[0].size = 'grande'));
const characteristics = [
	{ name: 'Balón', size: 'grande' },
	{ name: 'Carrito', size: 'pequeño' },
	{ name: 'Muñeca', size: 'mediano' },
];

function mergeChar(array1, array2) {
	for (const product of array1) {
		for (const characteristic of array2) {
			if (product.name === characteristic.name) {
				product.size = characteristic.size;
			}
		}
	}

	return array1;
}

console.log(mergeChar(bag, characteristics));

// Crea una función que ordene a los animales de menor a mayor, de acuerdo al número de patas que tiene:
const animals = [
	{
		name: 'Dog',
		paws: 4,
	},
	{
		name: 'Duck',
		paws: 2,
	},
	{
		name: 'Spider',
		paws: 8,
	},
	{
		name: 'Snake',
		paws: 0,
	},
];

function sortByPaws(arr) {
	return arr.sort((a, b) => a.paws - b.paws);
}

console.log(sortByPaws(animals));

// Retorna el id que se repite más veces
const services = [
	{ name: 'Marketing', id: 10 },
	{ name: 'Programación', id: 11 },
	{ name: 'Periodismo', id: 12 },
	{ name: 'Redacción', id: 10 },
	{ name: 'Fitness', id: 12 },
	{ name: 'Fotografía', id: 9 },
	{ name: 'Gimnasia', id: 12 },
];

// {10: 2, 11: 1, 12: 3, 9: 1}
function findMostCommonId(serv) {
	const commonService = {};

	for (const service of serv) {
		// if (commonService[service.id]) {
		// 	commonService[service.id] ++
		// } else {
		// 	commonService[service.id] = 1
		// }
		console.log(service);
		commonService[service.id] = ++commonService[service.id] || 1;
	}

	console.log(commonService);

	const mostCommonService = Object.entries(commonService).sort(
		(a, b) => b[1] - a[1],
	);
	console.log(mostCommonService);

	return +mostCommonService[0][0];
}
console.log(findMostCommonId(services));

// Encuentra al objeto por su nombre
const objects = [
	{
		name: 'Pelota',
		color: 'Blue',
		amout: 22,
	},
	{
		name: 'Carrito',
		color: 'Green',
		amout: 40,
	},
	{
		name: 'Barbie',
		color: 'Pink',
		amout: 50,
	},
	{
		name: 'Canica',
		color: 'Black',
		amout: 60,
	},
];

function findObject(objs, name) {
	let findedObj;

	for (const object of objs) {
		if (object.name === name) {
			console.log(object);
			findedObj = object;
		}
	}

	return findedObj;
}

console.log(findObject(objects, 'Carrito'));
