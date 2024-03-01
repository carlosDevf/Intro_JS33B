console.log("=====CONDICIONALES====")
// console.log("======IF_ELSE=======")
const estaLLoviendo = 10 > 20

// estaLLoviendo === true
if (estaLLoviendo) {
    //si el if es true se ejecuta lo que
    // esta aqui
    // console.log("Llevate un paraguas")
} else {
    // si la condicion no se cumple
    // console.log("No te lleves el paraguas")
}

// if (estaLLoviendo === false) {
//     console.log("No te lleves el paraguas")
// }
const calificacion = 8
console.log("===IF_ELSE_IF_..._ELSE===")
//TODO: evaluar todos los casos
if (calificacion < 5) {
    //si el if es true se ejecuta lo que
    // esta aqui
    console.log("Estas reprobado")
} else if (calificacion === 8) {
    // si la condicion no se cumple
    console.log("Bien hecho pero puedes mejorar")
} else if (calificacion < 8 && calificacion > 5) {
    console.log("Por poco y no pasas")
} else {
    console.log("No tenemos tu evaluacion")
}
//TODO: PODEMOS PARAR LAS EVALUACIONES DENTRO DE UNA FUNCION

if (calificacion < 5) {
    //si el if es true se ejecuta lo que
    // esta aqui
    console.log("Estas reprobado")
} 

if (calificacion === 8) {
    // si la condicion no se cumple
    console.log("Bien hecho pero puedes mejorar")
}

if (calificacion <= 8 && calificacion > 5) {
    console.log("Por poco y no pasas")
}

if (calificacion > 8) {
    console.log("Excelente")
}

if (calificacion === undefined || calificacion === 0) {
    console.log("No tenemos tu evaluacion")
}


// es mala practica anidar ifs ❌❌❌❌❌
if (10===10){
    if(4==4) {
        console.log('Mala practica')
    }
}

if (10===10 && 4==4){    
    console.log('Mala practica')    
}























