const button = document.querySelector(".button");
const p = document.querySelector(".text");
// eventos
/* 
addEventListener("string evento", callback)
*/
let count = 0;
p.textContent = count;

let isFollow = false;

button.addEventListener("click", function () {
  /* count++;
  p.textContent = count; */
  isFollow = !isFollow;
  // operador ternario
  button.textContent = isFollow ? "💛" : "💘";

  /* if (isFollow) {
    button.textContent = "💛";
  } else {
    button.textContent = "💘";
  } */
});
