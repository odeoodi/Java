const name = prompt("Give your name")

min =1
max=4
let houseNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1
let house = ''
if (houseNumber === 1) {
  house = 'Ravenclaw'
}
else if (houseNumber === 2) {
  house = 'Hufflepuff'
}
else if (houseNumber === 3) {
  house = 'Gryffindor'
}
else {
  house = 'Slytherin'
}

document.querySelector('#hattu').innerHTML = `${name} your house is ${house}`