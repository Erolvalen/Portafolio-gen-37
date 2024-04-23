/*************************************/
/* ASYNC ==> Asincronía async/await */
/************************************/

// La palabra clave async
// Esta palabra se coloca previamente a la función asíncrona

// función normal
// async function getGift () {}

// función flecha
// const getGift = async ()=> {}

// La palabra clave await le dice espera al reesolve de la priomesa

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

// consumiendo la promesa
async function getGift() {
	try {
		const regalo = await gift;
		const regalo1 = await gift;
		const regalo2 = await gift;
		console.log(`${regalo.mensaje} y te has ganado un ${regalo.consola}`);
	} catch (error) {
		console.log(error);
	}
}

getGift();
