/* 
valores de verdad
tabla de verdad


AND (&&) -> esto devuelve true si todas son true
OR (||) -> esto devuelve false si todas son false
NOT (!) -> negar un valor de verdad
*/

/* const test = 10 * "c";
console.log(test);
console.log(typeof test); */

/* Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), 
en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, 
responder: “No te creo”. */

/* 
  1 - datos de entrada
  2 - operaciones
  3 - datos de salida
*/

// const pregunta = prompt("¿Eres bellisimo/a?");
const pregunta = 'si';
const sanitize = pregunta.trim().toLocaleLowerCase();

const isAfirmative = "si";
let response = "";

if (sanitize === isAfirmative) {
  response = "Ciertamente";
} else {
  response = "No te creo";
}

console.log(4 / "b");

/* 
Que tipos de datos en js, recuerdan?
  1. string
  2. number -> NaN, double, float, integer
  3. boolean
  4. undefined
  5. null
*/