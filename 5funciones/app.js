/* const numero1 = 2;
const numero2 = 3;
const suma = numero1 + numero2;

const numero3 = 10;
const numero4 = 3;
const suma2 = numero3 + numero4;

const numero5 = 4;
const numero6 = 5;
const suma3 = numero5 + numero6;
console.log(suma);
*/

// funciones -> fragmento de código que resuelve una tarea, y que se puede reutilizar
// function -> palabra reservada
// suma -> nombre de la funcíón
// () -> parametros - "variables dentro de la función"
// {} -> código que ejecuta la función, scope
// return -> devuelva x valor, solo puedo retornar una vez

// declaración de una función
function suma(n1 = 0, n2 = 0) {
  const resultado = n1 + n2;
  return resultado - n2;
}

function log(cosa) {
  console.log(cosa);
}
// console.log(n1);

// invocación de la función
// console.log(suma());
// console.log(suma(10, 4));

const frutas = ["🍓", "🥝", "🍏", "🍒", "🍉", "🍊🍐"];
const numeros = [1, 4, 3, 5, 6, 12];
const demo = [];

function mostrarEnConsola(array = []) {
  if (!array) return;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    log(element);
  }
}

// falsy values
// mostrarEnConsola(frutas);
// mostrarEnConsola(numeros);
// mostrarEnConsola(demo);
// mostrarEnConsola("hola mundo");

//log(mostrarEnConsola(null));
mostrarEnConsola(null);
