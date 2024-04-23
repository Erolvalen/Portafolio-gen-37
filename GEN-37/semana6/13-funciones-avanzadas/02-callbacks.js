/************************************/
/* FUNCTION ==> Funciones Callback */
/***********************************/

// Callback: Llamar después
// Una función que pasamos por argumento a otra función

function question(response, callback1, callback2) {
	console.log(callback1());
	console.log(callback2());
	if (response) {
		callback1();
	} else {
		callback2();
	}
}

// Respuesta
const respuesta = false;

// function acepto() {
// 	console.log('Acepto');
// }

// function rechazo() {
// 	console.log('Rechazo');
// }

question(
	respuesta,
	function acepto() {
		return 'Acepto';
	},
	function rechazo() {
		return 'Rechazo';
	},
);
