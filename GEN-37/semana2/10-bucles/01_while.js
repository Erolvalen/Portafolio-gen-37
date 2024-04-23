/********************************/
/* BUCLES */
/*******************************/
// Los Bucles son una forma de repetir el mismo código varias veces.
// Existen 5 tipos:
// -while: La condición es comprobada antes de cada iteración
// -dowhile: La condición es comprobada después de cada iteración
// -for: la condición es comprobada antes de cada iteración con ajustes adicionales disponibles
/* Nuevos, llegaron con ECMAscript 6 */
// -for...in: se utiliza para iterar sobre las propiedades de un objeto
// -for...of: se utiliza para iterar sobre los valores de un objeto iterable (como un array)

// Importante! Si un bucle no se rompe va a generar un ciclo infinito y te aparece la famosa pantalla azul si no cuentas con una computadora muy potente, ya que ocupa los recursos de nuestra computadora

/********************************/
/* BUCLES ==> WHILE (MIENTRAS) */
/*******************************/
// While crea un bucle que ejecuta una instrucción especificada mientras cierta expresión o condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la instrucción.
/*
Sintaxis:
let i = 0 <= Inicializador
while (condicion) {
  // Bloque de código - cuerpo del bucle
  i++ <= Operación
}
*/

let num = 1; // 2....10, 11

while (num <= 10) {
	console.log(num);
	num++;
}

let reverse = 10;

while (reverse) {
	console.log(reverse);
	reverse--;
}

let withMinus = -10;

while (withMinus) {
	console.log(withMinus);
	withMinus++;
}

// Con arreglos
const food = ['🍕', '🍔', '🌭', '🥐', '🥪', '🌮', '🍗', '🍜']

let initialFood = 0

while (initialFood < food.length) {
	console.log(food[initialFood])
	initialFood++
}

// Con un arreglo de objetos
const users = [
	{name: 'Jean', age: 20},
	{name: 'Luis' , age: 23},
	{name: 'Cris', age: 40}
]

let iterator = 0
let myUserNames = []
while (iterator < users.length) {
	console.log(users[iterator].name)
	myUserNames.push(users[iterator].name)
	iterator++
}

console.log(myUserNames)

// Nosotros podemos usar bucles en todo lo que es iterable, no sólo arrays, por ejemplo, texto
const text = 'Aprendiendo JS con la GEN37'

let index = 0
while (index < text.length) {
	console.log(text[index])
	index++
}

