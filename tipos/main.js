// alert("hola desde main")
// debil tipado
// lodash _
// Variables
// let ES5
let nombre = "Carlos" // string => texto
// console.log(nombre)
nombre = "Pepito"
// console.log(nombre)
// const ES5 **
const numero1 = 10
// console.log(numero1)

// var => uso especial y evitar su uso
// var datoGlobal = "Soy un dato global"
// var datoGlobal = "Soy un variable doble"

// Tipos de datos
// primitivos y compuestos
// strings, number, boolean
// cadena de texto alt + 096 => atajo de asscii
// acento grave `` template string
// eslit o el prettier
const soyUnString = 'hola "mundo"'
// console.log(soyUnString)

// number
const valor1 = 30
// console.log(valor1)

// console.log(typeof valor1)

// boolen true o es false
const estaLloviendo = false
// console.log(estaLloviendo)

// objetos y arreglos


// Operadores
// = + - / %(modulo) el residuo de una division
// console.log(10%2)

// asignacion Suma y asignacion
let cambio = 10
// cambio = cambio + 10
// cambio += 10
// console.log(cambio, "suma y asignacion")

// asignacion y reta 
// cambio = cambio - 5
cambio -= 5
// console.log(cambio)

// OPERADORES DE COMPARACION
// operadores de igualdad
// con dos iguales *** error de js 
console.log(10 == 10)
console.log(10 == "10")
// console.log(typeof "10") //<== string
// console.log(typeof 10) //<== number
console.log(10+"10") // concatenando**
console.log(10+10)

// JS moderno siempre ocupen el triple igual
// con triple igualdad ** para todo igualdad estricto
// dato con el tipo
console.log(10 === 10)
console.log(10 === "10")

// Operador de desigualdad estricto
console.log(20 !== 20)

// Operadores de mayor y menor Que
console.log(20 < 30)

// Operador mayor y menor que e igual
console.log(20 <= 20, "menorQ e igual")

//objetos que vienen de un base datos, JSON, geoJSON
let incremento = 100
incremento++
incremento++
incremento++
incremento++
// console.log(incremento)

let decremento = 200
decremento--
// console.log(decremento)
// Operadores binario resultado un valor boolean
// OPERADOR AND &
console.log(10 === 10 && 5 > 10 && 2 > 10)
// primera condicion es: 10 es igual a 10 ✅ &&
// segunda condicion es: 5 es mayor a 10 ❌ parar la evaluacion y retornar un false
// la tercera evaluacion de 2 mayor a 10 🫷 ya no se evalua

// OPERADOR OR ||  o alt+124 ascii
console.log(10 === 10 || 5 > 10 || 2 > 10)
// si alguna de las condiciones es verdadera regresa un true

//https://caniuse.com/?search=%3F%3F
// Operador JavaScript operator: Nullish coalescing assignment ??
let saldoCuenta = 0 || "no tienes dinero"
let saldoCuentaNullis = 0 ?? "no tienes dinero"
// cuando un valor nos retorna un false = falsy
// TODO: revisar despues de condicionales
console.log(saldoCuenta)
console.log(saldoCuentaNullis)
// // La funcion Boolean te dice que valor es falso y cual verdadero
// console.log(Boolean("Carlos"))
// console.log(10)// integer
// console.log(1.8) // foat o decimal
// console.log(-10)

console.log("==============")
// undefiled y un null
let valorUndefined
console.log(valorUndefined)
// si existe la variable pero no se le ha asignado un valor definido
// dato primitivo
console.log(typeof undefined)

// NULL
let valorNull = null
// es un objeto de JS
console.log(typeof null)
console.log(null === undefined)























