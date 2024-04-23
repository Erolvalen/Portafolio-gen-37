/***************************************************/
/* DESTRUCTURING ==> desestructuración de Arreglos */
/***************************************************/

// Sin desestructuración | destructuración
const person = ['Pablo', 'Silva'];

console.log(person[0]);
console.log(person[1]);

const nombre = person[0];
const apellido = person[1];

console.log(nombre, apellido);

const [primerNombre, primerApellido] = person;

console.log(primerNombre, primerApellido);

// Ignorar elementos
const fruits = ['manzana', 'pera', 'naranja', 'platano', 'uva', 'piña'];
const [, , fruit2, , ...rest] = fruits;
// console.log(fruit1);
console.log(fruit2);
console.log(rest);
// console.log(rest[2]);
// console.log(fruit3)

// Asignar cualquier coda en el lado izquierdo
const colors = {};

[colors.red, colors.green, colors.blue] = '#ff0000 #00ff00 #0000ff'.split(' '); // [#ff0000, #00ff00, #0000ff]
[red, green, blue] = '#ff0000 #00ff00 #0000ff'.split(' '); // [#ff0000, #00ff00, #0000ff]

// colors.yellow = #ff0

console.log(colors);
console.log(colors.red);
console.log(colors.green);
console.log(colors.blue);
console.log(red);
console.log(green);
console.log(blue);

const user = {
	myName: 'Jorge',
	age: 25,
};

console.log(Object.entries(user));

for (const [clave, valor] of Object.entries(user)) {
	console.log(clave);
	console.log(valor);
}

// valores predeterminados
const [userName = 'Visitante', alternativeName = 'Anonymous'] = ['Victor'];

console.log(userName);
console.log(alternativeName);
