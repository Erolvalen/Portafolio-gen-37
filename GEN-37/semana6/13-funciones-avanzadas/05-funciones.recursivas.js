/**************************************/
/* FUNCTION ==> Funciones Recursivas */
/*************************************/

// Una función recursiva es una función que se llama a sí misma de forma repetida hasta que alcanza una condición de salida

const users = [
	{
		name: 'Andres',
		age: 18,
	},
	{
		name: 'David',
		age: 28,
	},
	{
		name: 'Mateo',
		age: 38,
	},
];

// Dos formas de pensar
// -Pensamiento iterativo
for (let index = 0; index < users.length; index++) {
	console.log(users[index].name);
}

// -Pensamiento recursivo
function recursivo(arr, i = 0) {
	// caso base Condicion de salida
	if (i < arr.length) {
		console.log(arr[i].name);
		// caso recursivo: LLamada a la función a sí misma
		recursivo(arr, ++i);
	}
}

recursivo(users);

// 5! = 5 * 4 *3 *2 * 1 = 120
