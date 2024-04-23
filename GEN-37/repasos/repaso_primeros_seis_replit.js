const str = "Repasando para lograr los primeros seis de Replit";
const str1 = "Repasando para lograr los primeros seis de Replite";
const str2 = "Repasando para lograr los primeros seis de Replx";

// 1- Crea una función que acceda al último indice del string anterior:
function lastIndex(phrase) {
  return phrase[phrase.length - 1]
}

console.log(lastIndex(str));
console.log(lastIndex(str1));
console.log(lastIndex(str2));

// 2- Crea una función que acceda a la primer letra del string anterior:

function firstLetter(phrase) {
  return phrase[0]
}

console.log(firstLetter(str));

// 3- Crea una función que acceda a la primer palabra del string anterior:

function firstWord(phrase) {
  return phrase.split(' ')[0]
}

console.log(firstWord(str));

// 4- Crea una función que acceda a la penúltima palabra del string anterior:

function penultimateWord(phrase) {
  // return phrase.split(' ').reverse()[1]
  // return phrase.split(' ').at(-2)
  const str = phrase.split(' ')
  return str[str.length -2]
}

console.log(penultimateWord(str));

// 5- Crea una función que retorne la edad del objeto:
const user = {
  name: "Laura",
  age: 40,
};

function getAge(obj) {
  return obj.age
}

console.log(getAge(user));

function getAge1(obj, prop) {
  return obj[prop]
}

console.log(getAge1(user, 'age'))
console.log(getAge1(user, 'name'))

// 6- Del siguiente array de objetos sumar los valores que vienen en la propierdad edad de cada índice
const users = [
  { name: "Juan", age: 20 },
  { name: "Luisa", age: 30 },
  { name: "Ale", age: 40 },
];

function sumAges(arr) {
  return arr[0].age + arr[1].age + arr[2].age
}

console.log(sumAges(users));

// 7- Cuenta la cantidad de números que tiene la cuenta bancaria del siguiente usuario y devuelvelo en string
const user1 = {
  name: "Lalo",
  age: 53,
  account: 19708890,
};

function countNumbersOfAccount(user) {
  console.log(typeof user.account)
  console.log(typeof user.account.toString())
  return user.account.toString().length
}

console.log(countNumbersOfAccount(user1));
