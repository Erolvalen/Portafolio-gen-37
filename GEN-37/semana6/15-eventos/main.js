/*****************************************/
/* EVENTS ==> Introducción a los eventos */
/*****************************************/
// Handler atributo
// function atributo() {
//   window.alert('desde Handlre atributo')
// }

// Handler propiedad
propiedad.onclick = function () {
	window.alert('desde Handler propiedad');
};

const controlador = () => window.alert('desde Handler function');
// incorrecto
// btn.onclick = controlador()
// btn.onclick = controlador

// Método addEventListener
// Sintaxis
// element.addEventListener('event', handler, [options])

function handlerMetodo() {
	window.alert('desde Handler Método');
}

// document.getElementById('btn').addEventListener('click', handlerMetodo)

// removeEventListener
// Incorrecto
// document.getElementById('btn').removeEventListener('click', handlerMetodo)

// correcto

const myButton = document.querySelector('#btn');

function handlerClick() {
	window.alert('desde Handler Método');
	myButton.removeEventListener('click', handlerClick);
}

// myButton.addEventListener('click', handlerClick)

// con once
function handlerClickOnce() {
	window.alert('desde Handler Método y once');
}

myButton.addEventListener('click', handlerClickOnce, { once: true });

// Objetos del evento
document.addEventListener('click', (event) => {
	console.log('Tipo de evento:', event.type);
	console.log(
		'El elemento al que se le agregó el listener:',
		event.currentTarget,
	);
	console.log('El elemento que generó el evento:', event.target);
});

/* e.preventDefault */
// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   console.log('Usando prevent default')
// })

// Se puede usar para detener el comportamiento predeterminado de el evento, pero no solemos usarlo en anchor
const myLink = document.querySelector('#myLink');

myLink.addEventListener('click', (e) => {
	e.preventDefault();
	console.log('El enlace no se abrió');
});

/************************************/
/* EVENTS ==> Propagación y captura */
/************************************/

// Propagación del evento
// document.addEventListener('click', () => {
//   window.alert('Propagación: último ancestro')
// })
document.querySelector('.propagacion form').addEventListener('click', () => {
	window.alert('Propagación: form');
});
document.querySelector('.propagacion div').addEventListener('click', () => {
	window.alert('Propagación: div');
});
document.querySelector('.propagacion p').addEventListener('click', (e) => {
	window.alert('Propagación: p');
	e.stopPropagation();
});

// Captura del evento
document.querySelector('.captura form').addEventListener(
	'click',
	() => {
		window.alert('Captura: form');
	},
	{ capture: true },
);
document.querySelector('.captura div').addEventListener(
	'click',
	() => {
		window.alert('Captura: div');
	},
	{ capture: true },
);
document.querySelector('.captura p').addEventListener(
	'click',
	(e) => {
		window.alert('Captura: p');
	},
	{ capture: true },
);

/************************************/
/* EVENTS ==> Delegación de eventos */
/************************************/

// document.querySelectorAll('.productos .agregar').forEach((button) => {
//   button.addEventListener('click', (e) => {
//     console.log(e.target.dataset.id)
//   })
// })

// Con delegación de eventos
document.querySelector('.productos').addEventListener('click', (e) => {
	// if (e.target.classList.contains('agregar')) {
	//   window.alert(e.target.dataset.id)
	// }
	if (e.target.closest('.agregar')) {
		window.alert(e.target.closest('.agregar').dataset.id);
	}
});

// Contadores
const countersContainer = document.querySelector('.counters');

function sumRest(e) {
	const counterGroup = e.target.closest('.counter-group');
	const input = counterGroup.querySelector('.counter-value');
	const isIncrement = e.target.classList.contains('increment');

	if (isIncrement) {
		input.value++;
	} else {
		if (input.value > 0) {
			input.value--;
		}
	}
}

countersContainer.addEventListener('click', sumRest);
