/******************************************/
/* CONDICIONALES ==> OPERADOR TERNARIO ? */
/*****************************************/

// Sitaxis
// condición ? valor si es true : valor si es false
const age = 19;
// conticion|| if || bloque de true || else || bloque de false
const permiso = age >= 18 ? 'Puedes conducir' : 'No puedes conducir';

console.log(permiso);

// Ejemplo con múltiples condiciones
const num = 24;
const num2 = 10;

const result =
	num < num2
		? 'El número es menor'
		: num === num2
		? 'El número es igual'
		: 'El número es mayor';

console.log(result);
