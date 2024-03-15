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
  cual curso va a escoger?
  tiene una beca?
  
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

console.log(
  "El costo total del programa seleccionado  es: " + costoTotal
);

// const title = document.querySelector("h1");
// title.textContent = costoTotal;
