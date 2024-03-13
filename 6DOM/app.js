/* 
body

NodeList -> "array"
HtmlCollection -> "array"
*/

/* 
Dos apis (son formas de comunicar) importantes

document (object) -> DOM
window (object) -> Navegador
*/

/* 
arrays -> []
objects -> {}
*/

const product = {
  name: "Escritorio",
  price: 3_000,
  discount: 0.5,
  count: 10, // propiedad
  finalPrice: function () {
    // metodo
    return this.price - this.price * this.discount;
  },
};

// no lo hagan, porque por temas inmutabilidad, estoy cambiando la data original
// product.name = "Mouse";
// product.price = 10_000;

// una cosa es copiar un elemento
// hacer referencia de un elemento

console.log(product.name);
console.log(product.price);
console.log(product.finalPrice());

console.log(document.contentType); // propiedad de document
console.log(document.contains(null)); // metodo de document

const sectionNodos = document.getElementById("nodos");
console.log(sectionNodos);

const listTagName = document.getElementsByTagName("p");
console.log(listTagName[0]);

const listClassName = document.getElementsByClassName("text-sm");
console.log(listClassName);

//const uniqueElement = document.querySelector("");
const listQueryAll = document.querySelectorAll("p");
console.log(listQueryAll[0].textContent);
