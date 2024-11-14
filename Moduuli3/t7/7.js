'use strict'

const trigger = document.getElementById('trigger')

function picB(event) {
  const img = document.getElementById('target')
  img.src = 'img/picB.jpg'
}

function picA(event){
  const img = document.getElementById('target')
  img.src = 'img/picA.jpg'
}

trigger.addEventListener('mouseover', picB)
trigger.addEventListener('mouseout',picA)


