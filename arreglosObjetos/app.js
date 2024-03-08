// Arreglos -> array (matrices)
// posición (index) - valor

const frutas = ["🍓", "🥝", "🍏", "🍒", "🍉", "🍊🍐"];
const numeros = [1, 4, 3, 5, 6, 12];
const test = [frutas[0], frutas[4], frutas[5]];

const example = [[test], [numeros, frutas], [frutas]]; // 3

console.log(example);
/* 
  example[0] -> 1
  example[1] -> 2
  example[2] -> 1
*/

console.log(frutas[5]);
console.log(numeros[2]);

console.log(example[1][0][1]);

// cuantos elementos tiene un arreglo
console.log(frutas.length);

// objetos -> object
// clave - valor
const precios = {
  course: 4999,
  carrera: 3999,
  master: 2999,
};
console.log(precios.master);

// objetos de arreglos
const cosaSuperRara = {
  cosa1: frutas,
  cosa2: numeros,
};

console.log(cosaSuperRara.cosa1[0]);

const dbPrecios = [precios, precios, precios]; // arrreglo de objetos
console.log(dbPrecios[1].carrera);

const rootUser = {
  rol: "admin",
  name: "Roberto",
  lastName: "Ramirez",
  age: 20,
  "full-name": "Roberto Ramirez",
  fullName: "Roberto Ramirez",
};

console.log(rootUser.name);
console.log(rootUser.fullName);
console.log(rootUser["full-name"]); // esto no es la posición de un arreglo
