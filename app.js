import { mostrarpaises } from "./view/tablePaises.js";

const listar = document.querySelector("#listar");
const table = document.querySelector("#table");

listar.addEventListener("click", listarUsuarios, false);
let contador = 0;

function listarUsuarios() {
  if (contador == 0) {
    mostrarpaises();  //renderiza la tabla con los paises
    contador++;
  } else {
    table.innerHTML = "";
    contador = 0;
  }
}

/* var selection = document.getElementById("cars");
selection.addEventListener("click", select, true);
function select() {
  console.log(selection.options[selection.selectedIndex].value);
}
 */