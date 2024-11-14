'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById('target');

names.forEach(text => {
  const li = document.createElement('li');
  li.innerHTML = text;
  target.appendChild(li);
});