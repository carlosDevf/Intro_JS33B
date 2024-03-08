// ciclo while -> no olvidar las variables de control
let control = 10;

/* while (control < 5) {
  console.log("while");
  control += 1;
} */
// console.log("global");

// do while
/* do {
  console.log('do while')
} while (control > 5) */

// ciclo for
/* for (let index = 1; index <= control; index+=2) {
 console.log(index * 2);
} */

const frutas = ["🍓", "🥝", "🍏", "🍒", "🍉", "🍊🍐"];
console.log(frutas);

for (let index = 0; index < frutas.length; index++) {
  const element = frutas[index];
  console.log(element);
}

let acumulador = 0;
// index - acumulador
// 0 + 0 -> 0
// 1 + 0 -> 1
// 2 + 1 -> 3
// 3 + 3 -> 6
// 4 + 6 -> 10

for (let index = 0; index < 4; index++) {
  acumulador += index;
  console.log(acumulador);
}
