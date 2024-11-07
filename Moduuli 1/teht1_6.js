'use strict'

const answer = confirm('Should I calculate the squareroot?');

if (answer === true) {
  const number = prompt('Give a number for me to calculate :)');
  if (number > 0) {
    let root = Math.sqrt(parseInt(number));
    document.querySelector('#calculated').innerHTML = `${root}`;
  } else {
    document.querySelector(
        '#calculated').innerHTML = 'Negative squareroot is not possible';
  }
} else {
  document.querySelector(
      '#calculated').innerHTML = 'The squareroot is not calculated';
}

