/*****************************************/
/* BUCLES ==> DO WHILE (HACER MIENTRAS) */
/****************************************/

/*
Sintaxis:
let i = 0 <= Inicializador
do {
  // cuerpo del bucle
} while (condición)
*/

let num = 1; // 2....10, 11

do {
	console.log(num);
	num++;
} while (num <= 10)

let reverse = 10;

do {
	console.log(reverse);
	reverse--;
} while (reverse)

let withMinus = -10;

do {
	console.log(withMinus);
	withMinus++;
} while (withMinus)

// Diferencia entre while y do while
let bucleWhile = 1
let bucleDoWhile = 1

while ('') {
  console.log(bucleWhile)
  bucleWhile++
}

do {
  console.log(bucleDoWhile)
  bucleDoWhile++
} while ('');

// Con arreglos
const food = ['🍕', '🍔', '🌭', '🥐', '🥪', '🌮', '🍗', '🍜']

let initialFood = 0

do {
	console.log(food[initialFood])
	initialFood++
} while (initialFood < food.length)

// Con un arreglo de objetos
const users = [
	{name: 'Jean', age: 20},
	{name: 'Luis' , age: 23},
	{name: 'Cris', age: 40}
]

let iterator = 0
let myUserNames = []
do {
	console.log(users[iterator].name)
	myUserNames.push(users[iterator].name)
	iterator++
} while (iterator < users.length)

console.log(myUserNames)

// Nosotros podemos usar bucles en todo lo que es iterable, no sólo arrays, por ejemplo, texto
const text = 'Aprendiendo JS con la GEN37'

let index = 0
do {
	console.log(text[index])
	index++
} while (index < text.length)