/**************************************/
/* ASYNC ==> Asincronía con promesas */
/*************************************/

// Crear una promesa //
// Sintáxis
// const promise = new Promise(function (resolve, reject) {
// 	Ejecutor('El código productor');
// });

const promise = new Promise((resolve, reject) => {
	window.setTimeout(() => {
		resolve('cumplido');
	});
	// window.setTimeout(() => {
	// 	reject(new Error('Rechazado'));
	// });
}, 1000);

console.log(promise);

// Consumir una promesa //
/* Las promesa tiene los siguientes métodos, que podremos utilizar:

.then(resolve): Ejecuta la función callback resolve cuando la promesa se cumple.
.catch(reject): Ejecuta la función callback reject cuando la promesa se rechaza.
.then(resolve,reject): Método equivalente a las dos anteriores en el mismo .then().
.finally(end): Ejecuta la función callback end, siempre se va a ejecutar, tanto si se cumple como si se rechaza. */

// 1- Handler
// function promesaOK(str) {
// 	console.log('Esto viene de la promesa:', str);
// }

// function promesaBad(str) {
// 	console.log('Ocurrio un error:', str);
// }

// promise.then(promesaOK).catch(promesaBad);

// 2-Hnadler

// promise
// 	.then(function promesaOK(str) {
// 		console.log('Esto viene de la promesa:', str);
// 	})
// 	.catch(function promesaBad(str) {
// 		console.log('Ocurrio un error:', str);
// 	})
// 	.finally(() => {
// 		console.log('Esto se muestra siempre');
// 	});

// Ejemplo práctico
const children = true;

// creando promesA
const gift = new Promise((resolve, reject) => {
	if (children) {
		const winner = {
			consola: 'xbox',
			mensaje: 'Te portaste muy bien',
		};
		resolve(winner);
	} else {
		reject('Lo siento, no te has portado bien');
	}
});

// cONSUMIENDO LA PROMESA
function getGift() {
	gift
		.then((fedex) => {
			console.log(`${fedex.mensaje} y te has ganado un ${fedex.consola}`);
		})
		.then((fedex) => {
			console.log(`${fedex.mensaje} y te has ganado un ${fedex.consola}`);
		})
		.then((fedex) => {
			console.log(`${fedex.mensaje} y te has ganado un ${fedex.consola}`);
		})
		.then((fedex) => {
			console.log(`${fedex.mensaje} y te has ganado un ${fedex.consola}`);
		})
		.then((fedex) => {
			console.log(`${fedex.mensaje} y te has ganado un ${fedex.consola}`);
		})
		.then((fedex) => {
			console.log(`${fedex.mensaje} y te has ganado un ${fedex.consola}`);
		})
		.then((fedex) => {
			console.log(`${fedex.mensaje} y te has ganado un ${fedex.consola}`);
		})
		.then((fedex) => {
			console.log(`${fedex.mensaje} y te has ganado un ${fedex.consola}`);
		})
		.then((fedex) => {
			console.log(`${fedex.mensaje} y te has ganado un ${fedex.consola}`);
		})
		.then((fedex) => {
			console.log(`${fedex.mensaje} y te has ganado un ${fedex.consola}`);
		})
		.then((fedex) => {
			console.log(`${fedex.mensaje} y te has ganado un ${fedex.consola}`);
		})
		.then((fedex) => {
			console.log(`${fedex.mensaje} y te has ganado un ${fedex.consola}`);
		})
		.then((fedex) => {
			console.log(`${fedex.mensaje} y te has ganado un ${fedex.consola}`);
		})
		.catch((mensaje) => {
			console.log(mensaje);
		});
}

getGift();
