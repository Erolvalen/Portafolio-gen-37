/***************************************/
/* ASYNC ==> Asincronía en JavaScript */
/**************************************/

// sincronia
console.log('Tarea #1');
let text;
for (let i = 0; i < 500000000; i++) {
	text = 'Tarea #2';
}

console.log(text);
console.log('Tarea #3');

console.log('Tarea #4');
window.setTimeout(() => {
	console.log('Tarea #5');
}, 1000);
console.log('Tarea #6');
