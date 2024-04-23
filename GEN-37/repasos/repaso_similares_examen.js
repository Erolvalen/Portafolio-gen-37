// 1- Crea una función con un parámetro que recibirá por argumento un string y lo retornará al revés.
const phrase = 'Hola me llamo Ale';
const phrase2 = 'Hola me llamo Jhon';

function reverseString(string) {
	return string.split('').reverse().join('');
}

console.log(reverseString(phrase));
console.log(reverseString(phrase2));

// 2- Crea una función con tres parámetros, que reciba tres arreglos de números y sume los elementos todos los arrays.
const array1 = [8, 9, 10, 12, 5];
const array2 = [59, 60, 70, 4, 10];
const array3 = [10, 20, 30];

function sumThreeArrays(array, array2, array3) {
	const concatArrays = array.concat(array2, array3);
	console.log(concatArrays);
	let sum = 0;

	for (const valor of concatArrays) {
		sum += valor;
	}

	return sum;
}

console.log(sumThreeArrays(array1, array2, array3));

function sumArrays(array1, array2, array3) {
	let suma = 0;
	for (const valor of array1) {
		suma += valor;
	}
	for (const valor2 of array2) {
		suma += valor2;
	}
	for (const valor3 of array3) {
		suma += valor3;
	}
	return suma;
}

console.log(sumArrays(array1, array2, array3));

// 3- Crea una función que encuentre los múltiplos de un número dado(primer parámetro), sin incluirlo, pero limitado a la cantidad de múltiplos que se te solicite(segundo parámetro).
function multiplesLimited(number, maxMultiples) {
	const multiples = [];

	for (
		let index = number * 2 /*20 * 2 = 40*/;
		multiples.length < maxMultiples;
		index += number /* index = index + number = 60*/
	) {
		console.log(index);
		multiples.push(index);
	}

	return multiples;
}

console.log(multiplesLimited(20, 5));
console.log(multiplesLimited(30, 7));

function multiplesLimited1(number, maxMultiples) {
	const multiples = [];

	for (let index = number + 1; multiples.length < maxMultiples; index++) {
		if (!(index % number)) {
			console.log(index);
			multiples.push(index);
		}
	}

	return multiples;
}

console.log(multiplesLimited1(20, 5));
console.log(multiplesLimited1(30, 7));

// 4- Crea una función que encuentre la palabra que se repite más veces en la frase dada y la devuelva, OJO no la cantidad de veces que se repita, si no la palabra misma
const phrase1 =
	'seré programador, soy estudiante de Academlo, soy disciplinado, soy puntual, soy quien va a aprobar el examen de mañana';
const phrase111 =
	'el perro de mi vecina es un perro más grande que el perro de mi hermano por eso me gusta más ese perro';
const phrase1111 = [
	['el', 1],
	['perro', 4],
	['agua', 2],
	['musica', 3],
];

console.log(phrase1111.sort((a, b) => b[1] - a[1]));

function mostCommonWord(string) {
	const toArray = string.split(' ');
	console.log(toArray);
	const toObj = {};

	// console.log(toObj.soy);
	// console.log((toObj['soy'] = 1));
	// console.log(toObj.soy);

	for (const word of toArray) {
		console.log(word);
		// toObj[word] = ++toObj[word] || 1;
		if (toObj[word]) {
			toObj[word]++;
		} else {
			toObj[word] = 1;
		}
	}

	console.log(toObj);

	const commonWord = Object.entries(toObj).sort((a, b) => b[1] - a[1]);
	console.log(commonWord);

	return commonWord[0][0];
}

console.log(mostCommonWord(phrase1));
console.log(mostCommonWord(phrase111));
