// 1- Con export default

// function showString() {
// 	return 'Hola, me estoy ejecutando';
// }

// console.log(showString());

// export default showString;

// 2-Exportar varias funciones
// function showString() {
// 	return 'Hola, me estoy ejecutando';
// }

// function sum() {
// 	return 5 + 5;
// }

// const obj = {
// 	showString,
// 	sum,
// };

// export default obj;

// 4-Exportar varias funciones con export
// function showString() {
// 	return 'Hola, me estoy ejecutando';
// }

// function sum() {
// 	return 5 + 5;
// }

// export { showString, sum };

// 5- Exportar varias funciones con export en línea
// export function showString() {
// 	return 'Hola, me estoy ejecutando';
// }

// export function sum() {
// 	return 5 + 5;
// }

// 6- Combinando varias maneras de exportación
export function showString() {
	return 'Hola, me estoy ejecutando';
}

function sum() {
	return 5 + 5;
}

function rest() {
	return 6 - 5;
}

const PI = Math.PI;

export { sum, rest };

export default PI;
