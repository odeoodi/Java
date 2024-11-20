/*Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(2p)

First, program asks the user for the number of dice rolls.
Then the program throws a die as many times as the user defined.
Print the sum of the results in the console or in the HTML document.*/

'use strict';

const button = document.getElementById('button');
let result = 0;
const p = document.createElement('p');
const div = document.getElementById('target');
div.appendChild(p);
p.textContent = 'No rolls yet'
let buttonClicked = 0


button.addEventListener('click', function(event) {
  //console.log('button pressed')
  result = 0;
  const rolls = 1; //+prompt('How many dice rolls?')
  let thrown = 0;
  let sides = 20;//+prompt('How many sides in the die?')
  do {
    result += Math.floor(Math.random() * sides) + 1;
    thrown += 1;
    buttonClicked +=1
  } while (thrown !== rolls);


  p.textContent = result.toString();
  if (buttonClicked>10) {
    p.textContent='Why must u roll me so many times? I am getting dizzy... Let me have a moment.'
    let count = 6
    const timer = setInterval( function(){
      count--
      p.textContent = count.toString()
      if (count===0) {
        p.textContent='I am ready now!'
        clearInterval(timer)
        buttonClicked = 0
      }
    },1000)
  }

  return result;
});
