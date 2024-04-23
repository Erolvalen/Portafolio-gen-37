// 1. Usa la sentencia if para ayudar a los clientes de una pizzeria en línea a saber cuánto deben pagar por la pizza que ordenaron.

// las pizzas que tenemos disponibles son:
// 1. Pequeña: $10
// 2. Mediana: $15
// 3. Grande: $20
// 4. Familiar: $25

// En caso de que el cliente solicite una pizza que no esté disponible, debe mostrar un mensaje indicando que no está disponible.

// tu código aquí

function getMsg(order) {
	if (order === 'Pequeña') {
		return 'El precio es $10';
	} else if (order === 'Mediana') {
		return 'El precio es $15';
	} else if (order === 'Grande') {
		return 'El precio es $20';
	} else if (order === 'Familiar') {
		return 'El precio es $25';
	} else {
		return 'La pizza no está disponible';
	}
}

console.log(getMsg('Mediana'));
console.log(getMsg('Pequeña'));
console.log(getMsg('ExtraBig'));

const pizzas = {
	Pequeña: 10,
	Mediana: 15,
	Grande: 20,
	Familiar: 25,
};
const order = 'Mediana';
console.log(pizzas);

function account(obj, order1, quantity) {
	for (const objec in obj) {
		if (order1 === objec) {
			return ` El valor a pagar es: $${
				obj[objec] * quantity
			}  --> Gracias por su pedido`;
		}
	}
	return 'Opción no disponible..!!!  ¡Por favor elija una del menú';
}

console.log(account(pizzas, order, 3));

// 2. Pasa la siguiente condición a una sentencia switch
const diaDeLaSemana = 'martes';
if (diaDeLaSemana === 'lunes') {
	console.log('Es lunes');
} else if (diaDeLaSemana === 'martes') {
	console.log('Es martes');
} else if (diaDeLaSemana === 'miercoles') {
	console.log('Es miercoles');
} else if (diaDeLaSemana === 'jueves') {
	console.log('Es jueves');
} else if (diaDeLaSemana === 'viernes') {
	console.log('Es viernes');
} else if (diaDeLaSemana === 'sabado') {
	console.log('Es sabado');
} else if (diaDeLaSemana === 'domingo') {
	console.log('Es domingo');
} else {
	console.log('No es un día de la semana');
}

const diaDeLaSemana1 = 'hola';
switch (diaDeLaSemana1) {
	case 'lunes':
		console.log('Es Lunes');
		break;
	case 'martes':
		console.log('Es Martes');
		break;
	case 'miercoles':
		console.log('Es Miercoles');
		break;
	case 'jueves':
		console.log('Es Jueves');
		break;
	case 'viernes':
		console.log('Es Viernes');
		break;
	case 'sabado':
		console.log('Es Sábado');
		break;
	case 'domingo':
		console.log('Es Domingo');
		break;
	default:
		console.log('No es un día de la semana');
}

// 3. La siguiente función debe recibir como parámetro un string con un nombre del mes y debe retornar un string que indique la estación del año correspondiente. Si el mes no es válido, debe retornar "Mes no válido". Use la sentencia switch.
const month = 'julio';

function estacion(mes) {
	let message;
	switch (mes) {
		case 'enero':
		case 'febrero':
		case 'marzo':
			message = 'Es invierno';
			break;
		case 'abril':
		case 'mayo':
		case 'junio':
			message = 'Es primavera';
			break;
		case 'julio':
		case 'agosto':
		case 'septiembre':
			message = 'Es verano';
			break;
		case 'septiembre':
		case 'octubre':
		case 'noviembre':
		case 'diciembre':
			message = 'Es otoño';
			break;
		default:
			messaje = 'No es un mes';
	}
	return message;
}
console.log(estacion(month));

// 4. Crea una función que realice la siguiente operación: si recibe un número mayor a 10, retorne ese número, si no, retorne el doble del número recibido.

function operation(number) {
	if (number <= 10) {
		number *= 2;
	}
	return number;
}
console.log(operation(10));
console.log(operation(9));

function operation1(number) {
	return number > 10 ? number : number * 2;
}

console.log(operation1(10));
console.log(operation1(9));

// 5. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]
function halfArray(arr) {
	const halfNumber = Math.floor(arr.length / 2);
	console.log(halfNumber);
	if (arr.length % 2) {
		console.log(halfNumber);
		return arr[halfNumber];
	} else {
		console.log(halfNumber);
		return [arr[halfNumber - 1], arr[halfNumber]];
	}
}
console.log(halfArray([1, 3, 4]));
console.log(halfArray([1, 3, 4, 5, 6, 7]));

// 6. Tenemos un array con varios colores repetidos, pero quisieramos saber cuantos colores diferentes hay en el array y que cantidad de cada color hay. Tu trabajo es crear una función que reciba un array de colores y retorne un objeto con la cantidad de cada color.
const colores = [
	'rojo',
	'verde',
	'verde',
	'azul',
	'amarillo',
	'naranja',
	'rojo',
	'amarillo',
	'rojo',
	'verde',
	'azul',
	'rojo',
];

const obj = {
	rojo: 1,
};

console.log(obj.rojo++);
console.log(obj.rojo);
console.log(obj.rojo++);
console.log(obj.rojo);
console.log(obj.verde);

function amountColors(arr) {
	const count = {};

	for (const color of arr) {
		console.log(color);
		if (count[color]) {
			// si existe la propiedad en count
			count[color]++;
		} else {
			// si NO existe la propiedad en count
			count[color] = 1;
		}
	}

	return count;
}

console.log(amountColors(colores));

function colors(typeColor) {
	const objec = [];
	const objec2 = [];

	for (i = 0; i < typeColor.length; i++) {
		if (objec2.includes(typeColor[i], 0)) {
			continue;
		} else {
			let counters = 0;
			for (j = 0; j < typeColor.length; j++) {
				if (typeColor[i] === typeColor[j]) {
					counters++;
				}
			}
			objec.push(`${typeColor[i]}: ${counters}`);
			objec2.push(typeColor[i]);

			colr1 = objec[i];
		}
	}
	const arrayResult = Object.assign(objec);
	return arrayResult;
}

console.log(colors(colores));

function colors1(params) {
	const retcolor = {};

	for (const item of params) {
		console.log(item);

		retcolor[item] = retcolor[item] + 1 || 1;
	}

	return retcolor;
}

console.log(colors1(colores));

// El siguiente arreglo de usuario será el que pasarás por argumento a tus funciones de los problemas 7 y 8.
const usuarios = [
	{
		nombre: 'Erik',
		edad: 29,
		genero: 'Hombre',
	},
	{
		nombre: 'Georg',
		edad: 33,
		genero: 'Hombre',
	},
	{
		nombre: 'Andrea',
		edad: 42,
		genero: 'Mujer',
	},
	{
		nombre: 'Oscar',
		edad: 31,
		genero: 'Hombre',
	},
	{
		nombre: 'Daniela',
		edad: 22,
		genero: 'Mujer',
	},
];

// 7. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los nombres de los usuarios que sean mujeres.
function obtenerNombresMujeres(usuarios1) {
	let nombresMujeres = [];
	for (let usuario of usuarios1) {
		if (usuario.genero === 'Mujer') {
			nombresMujeres.push(usuario.nombre);
		}
	}
	return nombresMujeres;
}

console.log(obtenerNombresMujeres(usuarios));
// 8. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los usuarios que esten dentro del rango de edad de 20 a 30 años.

function arrayName2(inputName2) {
	const retorneName2 = [];
	for (const gen of inputName2) {
		if (gen.edad >= 20) {
			if (gen.edad <= 30) {
				retorneName2.push(gen.nombre);
			}
		}
	}
	return retorneName2;
}

console.log(arrayName2(usuarios));

function arrayName21(inputName2) {
	const retorneName2 = [];
	for (const gen of inputName2) {
		if (gen.edad >= 20 && gen.edad <= 30) {
			retorneName2.push(gen.nombre);
		}
	}
	return retorneName2;
}

console.log(arrayName21(usuarios));

// 9. El reto Fizz Buzz: Tenemos un array de números del 1-100, todos los que son múltiplos de 3 deben devolver Fizz, todos los que son múltiplos de 5 deben devolver Buzz y los que son múltiplos de ambos, es decir, 3 y 5, deben devolver Fizz Buzz.
function fizzBuzz() {
	const nums = [];

	for (let index = 1; index <= 100; index++) {
		console.log(index);
		if (index % 15 === 0) {
			nums.push(`${index}: Fizz Buzz`);
		} else if (index % 5 === 0) {
			nums.push(`${index}: Buzz`);
		} else if (index % 3 === 0) {
			nums.push(`${index}: Fizz`);
		} else {
			nums.push(`${index}: Nos soy ni Fizz ni Buzz`);
		}
	}

	return nums;
}

console.log(fizzBuzz());

let arrayNumber = [];
for (i = 1; i <= 100; i++) {
	arrayNumber.push(i);
}

function retoFizz(number) {
	const newArrayNumber = [];
	for (const num of number) {
		if (num % 3 === 0) {
			if (num % 5 === 0) {
				newArrayNumber.push('Fizz Buzz');
			} else {
				newArrayNumber.push('Fizz');
			}
		} else {
			if (num % 5 === 0) {
				newArrayNumber.push('Buzz');
			} else {
				newArrayNumber.push(num);
			}
		}
	}

	return newArrayNumber;
}
console.log(retoFizz(arrayNumber));
