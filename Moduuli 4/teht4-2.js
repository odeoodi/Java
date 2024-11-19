'use strict';

const moviesForm = document.querySelector('#movie-form');

moviesForm.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const movie = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${movie}`, {mode: 'cors'});
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    jsonData.forEach(item => {
      console.log('show ', item.show.name);
    });
    console.log(jsonData.show);
  } catch (error) {
      console.log('error ', error.message);
  }
});
