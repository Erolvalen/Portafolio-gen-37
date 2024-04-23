/*******************/
/* BUCLES ==> FOR */
/******************/
/*
Sintaxis:
for (inicialización let i = 0; condición i < 10; operación i++) {
  // cuerpo del bucle
}
*/

for (let pikachu = 1; pikachu <= 10; pikachu++) {
  console.log(pikachu)
}

for (let pikachu = 10; pikachu; pikachu--) {
  console.log(pikachu)
}

for (let pikachu = -10; pikachu; pikachu++) {
  console.log(pikachu)
}

// Con arreglos
const food = ['🍕', '🍔', '🌭', '🥐', '🥪', '🌮', '🍗', '🍜']

for (let index = 0; index < food.length; index++) {
  console.log(food[index]);
}

// Con un arreglo de objetos
const users = [
	{name: 'Jean', age: 20},
	{name: 'Luis' , age: 23},
	{name: 'Cris', age: 40}
]

for (let user = 0; user < users.length; user++) {
  console.log(users[user].age);
}

// Nosotros podemos usar bucles en todo lo que es iterable, no sólo arrays, por ejemplo, texto
const text = 'Aprendiendo JS con la GEN37'

for (let letter = 0; letter < text.length; letter++) {
  console.log(text[letter]);
}


// Directiva break
for (let num = 0; num < 50; num++) {
  console.log(num)
  if (num === 5) {
    break
  }
  console.log(num)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 9]

const searchedNumber = 5

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === searchedNumber) {
    console.log(`Número ${searchedNumber} ecnontrado!!`)
    break
  }
}

// continue 
for (let num = 0; num < 50; num++) {
  console.log(num)
  if (num === 7) {
    continue
  }
  console.log(num)
}

// Buscando pares 
for (let num = 1; num <= 20; num++) {
  console.log(num)
  if (num % 2) {
    console.log(num % 2)
    continue
  }
  console.log(num)
}

// impares
for (let num = 1; num <= 20; num++) {
  console.log(num)
  if (num % 2 === 0) {
    console.log(num % 2 === 0)
    continue
  }
  console.log(num)
}

// for anidados
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i: ${i}, j: ${j}`)
  }
}

// for anidados con ejemplo práctico 
const userList = [{id: 1}, {id: 2}]
const assistanceList  = [{user_id: 2, assistance: true}, {user_id: 1, assistance: false}]

function usersAssitance(users, assistance) {
  for (let i = 0; i < users.length; i++) {
    console.log(i)
    for (let j = 0; j < assistance.length; j++) {
      console.log(j)
      if (users[i].id === assistance[j].user_id) {
        console.log(users[i].id)
        console.log(assistance[j].assistance)
        users[i].assistance = assistance[j].assistance
      } 
    } 
  }
  return users
}

console.log(usersAssitance(userList, assistanceList))

