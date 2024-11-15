'use strict';

let numOne = document.getElementById('num1');
let numTwo = document.getElementById('num2');
let result;

const start = document.getElementById('start');
start.addEventListener('click', function(event) {
  numOne = +numOne.value;
  numTwo = +numTwo.value;

  const operation = document.getElementById('operation').value;
  if (operation === 'add') {
    result = numOne + numTwo;
  } else if (operation === 'sub') {
    result = numOne - numTwo;
  } else if (operation === 'multi') {
    result = numOne * numTwo;
  } else if (operation === 'div') {
    result = numOne / numTwo;
  }
  const answer = document.getElementById('result');

  answer.innerHTML = result;
});





