/***********************************/
/* CONDICIONALES */
/**********************************/

// Algunas veces necesitamos ejecutar un código dependiendo si se cumple una condición o no, para ello utilizamos las estructuras de controi.

/******************/
/* SENTENCIA IF */
/******************/

// Evalua la condición en los paréntesis y si el resultado es true ejecuta un bloque de código.
if ('true') {
	console.log('Se va a mostrar el mensaje');
}

// Podemos pasar una expresi{on }
if (5 > 2) {
	console.log('Sí 5, es mayor que 2');
}

const sentence = 5 > 2;

if (sentence) {
	console.log('Sí 5, es mayor que 2');
}

// Si la condici{on es false, no se ejecuta el bloque de código
if (0) {
	console.log('Esto no se va a mostrar');
}

if (null) {
	console.log('Esto no se va a mostrar');
}

if ('') {
	console.log('Esto no se va a mostrar');
}
/*********/
/* else */
/********/

// La cláusula else es un bloque opcional y este se ejecutará cuando la condición sea falsa.

const numberOne = 2;
const numberTwo = 2;

if (numberOne >= numberTwo) {
	console.log(`${numberOne} es mayor o igual que ${numberTwo}`);
} else {
	console.log(`${numberOne} es menor que ${numberTwo}`);
}

const age = 16;
let permiso;

if (age >= 18) {
	permiso = 'Puedes conducir';
} else {
	permiso = 'No puedes conducir';
}

console.log(permiso);

/************/
/* else if */
/***********/
// La cláusula else if nos proporciona bloques opcionales para probar todas nuestras variantes.
if (numberOne > numberTwo) {
	console.log(`${numberOne} es mayor que ${numberTwo}`);
} else if (numberOne < numberTwo) {
	console.log(`${numberOne} es menor que ${numberTwo}`);
} else {
	console.log(`${numberOne} es igual que ${numberTwo}`);
}

// Podemos usar todas las cláusulas else if que necesitemos. El bloque else es opcional.
const diaDeLaSemana = 'pelota';

if (diaDeLaSemana === 'lunes') {
	console.log('Es lunes');
} else if (diaDeLaSemana === 'martes') {
	console.log('Es martes');
} else if (diaDeLaSemana === 'miércoles') {
	console.log('Es miércoles');
} else if (diaDeLaSemana === 'jueves') {
	console.log('Es jueves');
} else if (diaDeLaSemana === 'viernes') {
	console.log('Es viernes');
} else if (diaDeLaSemana === 'sábado') {
	console.log('Es sábado');
} else if (diaDeLaSemana === 'domingo') {
	console.log('Es domingo');
} else {
	console.log('No es un día de la semana');
}

// El orden es importante
const puntaje = 100;

if (puntaje === 500) {
	console.log('Felicidade3s sacaste el puntaje máximo');
} else if (puntaje >= 400) {
	console.log('Excelente');
} else if (puntaje >= 300) {
	console.log('Buen puntaje');
} else {
	console.log('Sigue intentando');
}

// condiciones anidadas
// Q uiero filtrar los productos que tengan un precio menor a 50 y una cantidad disponible
const products = [
	{ name: 'Chips', price: 25, stock: 10 },
	{ name: 'Bread', price: 65, stock: 5 },
	{ name: 'Sup', price: 40, stock: 0 },
	{ name: 'Cookies', price: 15, stock: 8 },
];

function filteProducts(arr) {
	const filteredProducts = [];

	for (const product of arr) {
		console.log(product);
		if (product.price < 50) {
			console.log(product);
			if (product.stock > 0) {
				console.log(product);
				filteredProducts.push(product);
			}
		}
	}

	return filteredProducts;
}

console.log(filteProducts(products));
