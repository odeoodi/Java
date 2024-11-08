/*Write a function called even(), which receives an array containing numbers as a parameter.
The function returns a second (usually smaller) array which has the even numbers of the original array.
The function must not make changes to the original table. (3p)
Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item array with items 2 and 4.
Print both the original array and the new array to the console in the main program after you have called the function.*/

'use strict';

const allNumbers = [2, 10, 3, 9, 6, 7];
const evenNumbers = [];
let number;

function even(numberList) {
  for (number of numberList) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  console.log(
      'All numbers: ' + allNumbers + '. Even numbers: ' + evenNumbers + '.');
}

even(allNumbers);