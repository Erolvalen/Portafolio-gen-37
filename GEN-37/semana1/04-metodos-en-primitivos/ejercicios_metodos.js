// => Ejericios de métodos en primitivos
// 1. Escribe una función que reciba un string y retorne la primera palabra de la cadena.
const str = "Hello world!"

function firstWord(text) {
  // tu código aquí
  // return text.slice(0, text.indexOf(' '));
  return text.split(' ')[0]
}

console.log(firstWord(str))

// 2. Escribe una función que reciba un string y retorne la penúltima palabra de la cadena.

const str1 = 'I love programming'

function penultimateWord(text) {
  // tu código aquí
  // const toArray = text.split(' ')
  // return toArray[toArray.length - 2]
  // return text.split(' ').slice(-2, -1).join()
  // return text.split(' ').at(-2)
  return text.split(' ').reverse()[1]
}

console.log(penultimateWord(str1))

// 3. Escribe una función que reciba un string y retorne la cantidad de palabras que contiene.

const str2 = 'I am studing programming at Academlo'

function wordsCount(text) {
  // tu código aquí
  return text.split(' ').length;
}

console.log(wordsCount(str2))

// 4. Escribe una función que compruebe si el correo electrónico que recibe como parámetro termina en @academlo.com

const email = "georg@academlo.com"

function isAcademloEmail(text) {
  // tu código aquí
  return text.endsWith('@academlo.com');
}

console.log(isAcademloEmail(email))

// 5. Escribe una función que reciba como parámetro una frase y una palabra y deberás reemplazar la última palabra de la frase.
const myPhrase = "I am learning JavaScript in Internet"
const myWord = "Academlo"

function replaceLastWord(phrase, word) {
  // tu código aquí
  // let lastIndex = phrase.lastIndexOf(' ') + 1;
  // console.log(lastIndex)

  // phrase = phrase.substring(0, lastIndex) + word;
  // console.log(phrase)
  // return phrase;
  // return phrase.replace(phrase.slice(phrase.lastIndexOf(' ') + 1), word)
  return phrase.replace(phrase.split(' ').slice(-1), word)
}

console.log(replaceLastWord(myPhrase, myWord))

// 6. Escribe una función que reciba como parámetro una frase y deberás retornar la longitud de la última palabra.
const myPhrase2 = "I am learning JavaScript in Academlo"

function phraseLength(phrase) {
  // tu código aquí
  // return phrase.split(" ")[phrase.split(" ").length - 1].length;
  // return phrase.split(' ').slice(-1).join().length
  return myPhrase2.split(" ").slice(-1).toString().length;
}

console.log(phraseLength(myPhrase2))

// 7. Declara una función que reciba como parámetro 3 cadenas de texto, deberas extraer las edades de cada una de ellas y retornar la suma de esas edades.
// La edad siempre será la antepenúltima palabra de la cadena.
const str3 = 'Hi, my name is Erik and I am 30 years old'
const str4 = 'Hi, my name is Georg and I am 33 years old'
const str5 = 'Hi, my name is Iván and I am 40 years old'

function sumarEdades (cadena, cadena2, cadena3) {
  // Tu código aquí

  // const sum = `${
  //   str3.split(" ").slice(-3, -2) +
  //   " " +
  //   str4.split(" ").slice(-3, -2) +
  //   " " +
  //   str5.split(" ").slice(-3, -2)
  // }`
  //   .split("")
  //   .join("");

  //   console.log(sum)
  // const sum2 =
  //   Number(sum.split(" ")[0]) +
  //   Number(sum.split(" ")[1]) +
  //   Number(sum.split(" ")[2]);
  // return sum2;
  // return parseInt(cadena.replace(/\D/g, "")) + parseInt(cadena2.replace(/\D/g, "")) + parseInt(cadena3.replace(/\D/g, ""));

  return parseInt(cadena.split(' ').at(-3)) + parseInt(cadena2.split(' ').at(-3)) + parseInt(cadena3.split(' ').at(-3))
}

console.log(sumarEdades(str3, str4, str5))

// 8. Define una función que regrese un número aleatorio entre 1 y 10.
function random() {
  // tu código aquí
  // return Math.floor(Math.random() * 10) + 1;
  return Math.ceil(Math.random() * 10);
}

console.log(random())

// 9. Cuál es el resultado de las siguientes operaciones:
console.log(Math.floor(1.5)) // Respuesta:
console.log(Math.ceil(1.5)) // Respuesta:
console.log(Math.round(1.5)) // Respuesta:

// 10. Resuelve el siguiente problema: el formato de la hora en un reloj digital tiene este formato 00:00:00, es decir, las horas, minutos y segundos están representados por dos dígitos. ¿Cómo podríamos resolver este problema?
const hours = 3
const minutes = 7
const seconds = 2

const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
console.log(time)

