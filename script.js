let righe;
let colonne;
let difficolta;
const numeriEstratti = [];
do {
    difficolta = parseInt(prompt("scegli difficolta da 1 a 3"));
} while (difficolta < 1 || difficolta > 3 || isNaN(difficolta));
if (difficolta == 1) {
    righe = 10;
    colonne = 10;
} else if (difficolta == 2) {
    righe = 9;
    colonne = 9;
} else if (difficolta == 3) {
    righe = 7;
    colonne = 7;
}
let totCell = righe * colonne;
function creazioneCelle(difficolta) {
    const element = document.createElement("div");
    element.classList.add("cell")
    if (difficolta == 1) {
        element.classList.add("difficolta-1");
    } else if (difficolta == 2) {
        element.classList.add("difficolta-2");
    } else if (difficolta == 3) {
        element.classList.add("difficolta-3");
    }
    return element;
}
for (let index = 1; index <= totCell; index++) {
    const grid = document.getElementById("Grid");
    const cell = creazioneCelle(difficolta);
 
    cell.innerText = index;
    cell.id = index;
    cell.addEventListener('click', function () {
        cell.classList.add("bg-acqua");
    })
    grid.appendChild(cell);
}   