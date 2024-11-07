/* Write a program that asks the user for numbers until he gives zero.
The given numbers are printed in the console from the largest to the smallest. (2p)*/
'use strict';
const numbers = [];

let number;
do {
  number = prompt('Give me a number, stop by giving a zero.');
  numbers.push(number);
} while (number !== '0');

const bigNumbers = numbers.sort((a, b) => b - a);
console.log(bigNumbers);