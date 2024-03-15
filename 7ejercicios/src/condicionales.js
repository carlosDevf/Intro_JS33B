/* 
Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.

El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 

  Master: $2999 MXN
  Carrera $3999 MXN
  Course: $4999 MXN

Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.

  Beca Facebook: 20% de descuento.
  Beca Google: 15% de descuento.
  Beca Jesua: 50% de descuento.

Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:

  Course: 2 meses
  Carrera 6 meses
  Master: 12 meses
*/

/* 
  datos entrada
  --cual curso va a escoger?
  --tiene una beca?
  
  operaciones
  --costo mensual
  --costo con la beca aplicada
  --costo total de la opción seleccionada

  datos de salida
  --cuánto deberá pagar mensualmente de acuerdo a la opción elegida
  --total por la opción elegida
*/

// Solicitar la información al usuario
const programa = Number(
  prompt(
    "Elige un nivel  \n1. Master: $2999MXN \n2. Carrera $3999 MXN \n3. Course: $4999 MXN"
  )
);

const beca = Number(
  prompt(
    "Elige una beca  \n1. Beca Facebook: 20% de descuento. \n2. Beca Google: 15% de descuento. \n3. Beca Jesua: 50% de descuento. \n4. No tengo beca"
  )
);

function calcularCostoPrograma(programa, beca) {
  let costoMensual = 0;

  if (programa === 1) {
    costoMensual = 2999;
  } else if (programa === 2) {
    costoMensual = 3999;
  } else if (programa === 3) {
    costoMensual = 4999;
  }

  if (beca === 1) {
    costoMensual -= costoMensual * 0.2;
  } else if (beca === 2) {
    costoMensual -= costoMensual * 0.15;
  } else if (beca === 3) {
    costoMensual -= costoMensual * 0.5;
  } else if (beca === 4) {
    costoMensual;
  }

  return costoMensual;
}

function calcularCostoTotal(programa, costoMensual) {
  let costoFinal = 0;

  if (programa === 1) {
    costoFinal = costoMensual * 12;
  } else if (programa === 2) {
    costoFinal = costoMensual * 6;
  } else if (programa === 3) {
    costoFinal = costoMensual * 2;
  }

  return costoFinal;
}

const costoMensualConDescuento = calcularCostoPrograma(programa, beca);
const costoTotal = calcularCostoTotal(programa, costoMensualConDescuento);

console.log("El costo mensual del programa es: " + costoMensualConDescuento);

console.log("El costo total del programa seleccionado  es: " + costoTotal);

// const title = document.querySelector("h1");
// title.textContent = costoTotal;

/* 
11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:

Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.

"coche" * 0.20
"moto" * 0.10
"autobús" * 0.5

Si los kilometros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. 

Considere qué: total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. */

/* 
  datos de entrada
  --tipo de vehículo
  --distancia recorrida - km

  operaciones
  kilometros => están entre 0 y 100 -> extra = 5
  kilometros => mayor a 100 -> extra = 10
  total = (precio kilometro x kms recorridos) + extra

  datos de salida
  final a pagar
*/
