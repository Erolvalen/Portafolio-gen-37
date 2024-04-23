/********************************************************/
/* MODULES ==> Módulos en JavaScript desde el Navegador */
/********************************************************/

// 1- Todo el script
// import './script.js';

// 2-Con export default
// import pikachu from './script.js';
// console.log(pikachu());

// 3-Importar varias funciones
// import obj from './script.js';
// // directamente del obj
// console.log(obj.showString());
// console.log(obj.sum());
// // con desestructuración
// const { showString, sum } = obj;
// console.log(showString());
// console.log(sum());

// 4-Varias funciones con desestructuración y export
// import { showString, sum as pikachu } from './script.js';

// console.log(showString());
// console.log(pikachu());

// function sum() {
// 	return 10 + 15;
// }
// console.log(sum());

import PI, { showString, sum as pikachu } from './script.js';

console.log(showString());
console.log(pikachu());
console.log(PI);

function sum() {
	return 10 + 15;
}
console.log(sum());
