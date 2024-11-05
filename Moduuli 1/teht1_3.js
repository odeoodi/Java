
const uno = prompt("Integer one")
const dos = prompt("Integer two")
const tres = prompt("Integer three")

const numeroUno = parseInt(uno)
const numeroDos = parseInt(dos)
const numeroTres = parseInt(tres)


let summa = numeroUno + numeroDos + numeroDos
let tulo = numeroUno * numeroDos * numeroTres
let keskiarvo = summa/3

document.querySelector("#numbers").innerHTML = `The sum is ${summa}. The product is ${tulo}.
The average is ${keskiarvo}.`