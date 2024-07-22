/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generate() {
  let who = ["Mi gata", "El perro de mi amiga", "Un chaval", "Un yonki"];
  let action = ["se comió", "se meó en", "aplastó", "destrozó"];
  let what = ["mis apuntes", "mi telefono", "la moto"];
  let when = [
    "antes de salir",
    "cuando estaba durmiendo",
    "mientras estaba en el gym",
    "cuando estaba comiendo",
    "mientras hacía tai chi"
  ];

  let who1 = who[Math.floor(Math.random() * who.length)];
  let action1 = action[Math.floor(Math.random() * action.length)];
  let what1 = what[Math.floor(Math.random() * what.length)];
  let when1 = when[Math.floor(Math.random() * when.length)];

  const excusa = `${who1} ${action1} ${what1} ${when1}.`;

  document.getElementById("excuse").innerHTML = excusa;
}
document.getElementById("generate").addEventListener("click", generate);
