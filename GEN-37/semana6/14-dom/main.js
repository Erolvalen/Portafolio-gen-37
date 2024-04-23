/**********************************/
/* DOM ==> Document Object Model */
/*********************************/

// window: El objeto raiz
// BOM: fUNCIONALIDAD DEL WINDOW
// DOM: ACCESO al documento

/* ==============================*/
/* DOM ==> Entorno del Navegador */
/* ==============================*/

// Objeto window

// console.log(window);

// function saludar() {
// 	window.alert('Hola');
// }

// window.saludar();
// console.log(window);

console.log(document);

// etiqueta root
console.log(document.documentElement);

// etiqueta head
console.log(document.head);

// etiqueta body
console.log(document.body);

document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';

// window.setTimeout(() => {
// 	document.body.style.backgroundColor = '';
// 	document.body.style.color = '';
// }, 3000);

/* ======================*/
/* DOM ==> Árbol del DOM */
/* ======================*/

// hijos de html
console.log(document.documentElement.childNodes);

const colection = document.body.children;
console.log(colection);

// las colecciones del dom son simil array
for (const element of colection) {
	console.log(element);
}

// console.log(
// 	document.documentElement.childNodes.forEach((element) => {
// 		element;
// 	}),
// );

const arrayFrom = Array.from(document.documentElement.childNodes).forEach(
	(element) => {
		console.log(element);
	},
);

// Eliminando elementos
document.documentElement.childNodes[1].remove();
console.log(document.documentElement.childNodes);

// Agregando elementos al Dom
// console.log(document.body.childNodes);
// const list = ['a', 'b', 'c'];
// let html = '<ul>';
// for (const item of list) {
// 	html += `<li>${item}</li>`;
// }

// html += '</ul>';
// document.body.childNodes[1].innerHTML = html;

/* =============================*/
/* DOM ==> Navegando por el DOM */
/* =============================*/
/*
Hay dos conjuntos principales de las propiedades de navegación:
  - Para todos los nodos: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
  - Para los nodos elementos: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.
*/
const hijo = document.querySelector('.hijo');
console.log(hijo);
const padre = document.querySelector('.padre');
console.log(padre);

// primer hijo nodo
console.log(padre.firstChild);
// Hermano siguiente del primer hijo nodo
console.log(padre.firstChild.nextSibling);
// ultimo hijo nodo
console.log(padre.lastChild);
// hermano anterior del último hijo odo
console.log(padre.lastChild.previousSibling);

// primer hijo elemento
console.log(padre.firstElementChild);
// hermano siguiente del primer hijo elemento
console.log(padre.firstElementChild.nextElementSibling);
// ultimo hijo elemento
console.log(padre.lastElementChild);
// hermano anterior del ultimo hijo elemento
console.log(padre.lastElementChild.previousElementSibling);

/* =============================*/
/*  DOM ==> Métodos de búsqueda */
/* =============================*/

// Buscar por clase un elemento
console.log(document.getElementsByClassName('by_class'));

// Buscar por etiqueta un elemento
console.log(document.getElementsByTagName('h4'));

// Buscar por id un elemento
console.log(document.getElementById('by_id'));
const titleElement = document.getElementById('by_id');
titleElement.classList.add('text-title');
titleElement.style.color = 'red';

console.log(by_id);

// Buscar por todo tipo de dato querySelectorAll en conjunto
const containerElements = document.querySelectorAll('.query-all');
console.log(containerElements);
for (const elemento of containerElements) {
	elemento.style.color = 'green';
}

// Buscar por todo tipo de dato querySelector individual
console.log(document.querySelector('.query-selector'));
console.log(document.querySelector('#query_selector'));
console.log(document.querySelector('.query-tag .query-selector'));
console.log(document.querySelector('[target="_blank"]'));

// Método Matches
const allh5Tags = document.querySelectorAll('h5');
const tagsArray = Array.from(allh5Tags);

for (const item of tagsArray) {
	console.log(item.matches('#matches'));
	if (item.matches('#matches')) {
		console.log(item);
	}
}

// Método Closest
console.log(document.querySelector('span').closest('div'));

// Método Contains
const ul = document.querySelector('.contains');
const li = ul.firstElementChild;
console.log(ul.contains(li));

/* ==============================*/
/*  DOM ==> Propiedades del nodo */
/* ==============================*/

// La propiedad innerHTML
// document.body.innerHTML = 'Hola';
document.body.innerHTML += 'Hola';

const metodos = [
	'querySelectorAll',
	'querySelector',
	'matches',
	'contains',
	'closest',
];

let elementoVacio = '';

for (const metodo of metodos) {
	elementoVacio += `<li>${metodo}</li>`;
}

document.querySelector('#contenedor').innerHTML = elementoVacio;

// La propiedad outerHTML
const changeSpan = document.querySelector('.properties h3:nth-of-type(2)');
console.log(changeSpan);

changeSpan.outerHTML = '<span>Esto se reemplaza en el DOM</span>';

// La propiedad hidden
const hiddenElement = document.querySelector('.hidden');

window.setTimeout(() => {
	hiddenElement.hidden = true;
}, 3000);

// La propiedad textContent
// innerHTML
document.querySelector('.text-content').innerHTML = '<h2>Con innerHTML</h2>';
// textContent
document.querySelector('.text-content').textContent =
	'<h2>Con textContent</h2>';

/* ============================*/
/*  DOM ==> Modificando el DOM */
/* ============================*/

// Métodos para crear nuevos nodos en el DOM
// Crear un elemento
console.log(document.createElement('div'));
// Crear un texto
console.log(document.createTextNode('Creando Texto'));
//  Creando un mensaje de alerta
// 1) cREAR EL ELEMENTO
const nuevoElemento = document.createElement('div');
// 2) Establecer clases
nuevoElemento.classList.add('alert');
// 3) Insertar el contenido
nuevoElemento.innerHTML = '<strong>Hola!</strong> Soy un aviso';
// 4) Agregarlo al DOM

// Métodos para insertar nuevos nodos al DOM
//append: Inserta el nodo al final de la etiqueta
document.body.append(nuevoElemento);
// prepend: Inserta elnodo al principio d ela etiqueta
document.body.prepend(nuevoElemento);
// before: Inserta el nodo antes de la etiqueta
document.querySelector('.manipulando').before(nuevoElemento);
// after: Inserta el nodo después de la etiqueta
document.querySelector('.manipulando').after(nuevoElemento);

// Método inserAdjacentHTML
const insertContainer = document.getElementById('insert');
/*
-beforebegin: inserta HTML inmediatamente antes de elem
-afterbegin: inserta HTML en elem, al principio
-beforeend: inserta HTML en elem, al final 
-afterend: inserta HTML inmediatamente después de elem
*/
insertContainer.insertAdjacentHTML(
	'beforebegin',
	'<h3>Este es el beforebegin</h3>',
);
insertContainer.insertAdjacentHTML('afterend', '<h3>Este es el afterend</h3>');
insertContainer.insertAdjacentHTML(
	'afterbegin',
	'<h3>Este es el afterbegin</h3>',
);
insertContainer.insertAdjacentHTML(
	'beforeend',
	'<h3>Este es el beforeend</h3>',
);

// Este método es dinámico
insertContainer.insertAdjacentHTML('afterend', `<h2>${5 + 5}</h2>`);

// Método para eliminar nodos en el DOM
const eliminando = document.querySelector('.delete').remove();

// Método para clonar nodos en el DOM
const cloname = document.querySelector('.clone').cloneNode(true);
document.body.append(cloname);

/* =================================*/
/*  DOM ==> Atributos y propiedades */
/* =================================*/

document.body.miPropiedad = {
	nombre: 'Ismael',
};

console.log(document.body.miPropiedad);

console.log(document.querySelector('.mi-atributo').dataset.miatributo);

/*
Todos los atributos son accesibles usando los siguientes métodos:
  - elemento.hasAttribute(nombre) – comprueba si existe.
  - elemento.getAttribute(nombre) – obtiene el valor.
  - elemento.setAttribute(nombre, valor) – establece el valor.
  - elemento.attributes – devuelve una colección de objetos de atributos.
  - elemento.removeAttribute(nombre) – elimina el atributo.
Los atributos HTML tienen las siguientes características:
Su nombre no distingue entre mayúsculas y minúsculas (id es igual a ID).
Sus valores son siempre strings.
*/

// hasAttribute
console.log(document.querySelector('.obteniendo').hasAttribute('class'));
// getAttribute
console.log(document.querySelector('.obteniendo').getAttribute('class'));
// setAttribute: agrega o modifica
document.querySelector('.cambiando').setAttribute('width', '300');
document.querySelector('.cambiando').setAttribute('heigth', '300');
// removeAttribute
document.querySelector('.cambiando').removeAttribute('heigth');
// attributes
console.log(document.querySelector('.attributes').attributes);

/* ==========================*/
/*  DOM ==> Estilos y Clases */
/* ==========================*/
textBg.style.backgroundColor = 'red';

// ClassList: te permite agregar add('nombre de la clase'), permite remover remove('nombre de la clase'), o ambas, agregar o eliminar toggle('AQUÍ VA EL NOMBRE DE La clase si existe la elimina si no la agrega')
obteniendoClase.classList.add('class-list');
// obteniendoClase.classList.remove('cambiar');
obteniendoClase.classList.toggle('toggle');
obteniendoClase.classList.toggle('cambiar');
