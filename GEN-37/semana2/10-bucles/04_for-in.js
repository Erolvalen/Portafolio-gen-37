/*********************/
/* BUCLES ==> FOR-IN */
/*********************/
// Con for in trabajamos la iteraci{on en las propiedad enumerables de un objeto.}

/*
for (const propiedad in objeto) {
  // cuerpo del bucle
}
*/

const user = {
	name: "Pablo",
	age: 25,
	email: "pablo@email.com",
};

for (const data in user) {
	console.log(`${data}: ${user[data]}`);
}

const text = "Aprendiendo JS con la GEN37";
for (const letter in text) {
	console.log(text[letter]);
}

const arr = [1, 2, 3]

for (const index in arr) {
	console.log(arr[index]);
}


// Ejemplo práctico 

const gens = {
  gen30: 40,
  gen31: 80,
  gen32: 50,
  gen33: 20,
  gen34: 90,
  gen35: 60,
  gen37: 10,
}

const gens1 = {
  gen40: 40,
  gen41: 80,
  gen42: 50,
  gen4: 20,
  gen44: 90,
  gen45: 60,
  gen47: 10,
}

function getTotal(obj) {
  const allGens = []

  for (const gen in obj) {
    console.log(`En la ${gen} hubo ${obj[gen]} alumnos`)
    allGens.push(`En la ${gen} hubo ${obj[gen]} alumnos`)
  }

  return allGens
}

console.log(getTotal(gens))
console.log(getTotal(gens1))