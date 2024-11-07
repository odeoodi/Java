'use strict'

/*Write a program that asks for the names of six dogs.
The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)*/

let doggos = []

for (let i=0; i<6;i++) {
  let dog = prompt(`Give a name of the ${i+1}. doggo.`)
  doggos.push(dog)
}
doggos.sort().reverse()

const ul = document.getElementById('one') // haetaan unordered list html documentista

for (let i=0;i<doggos.length;i++) {
  const li = document.createElement("li") //tehdään elementti list item

  li.innerHTML = doggos[i] // annetaan tekstiä li elementille

  ul.appendChild(li) // lisää nimen listaan
}
