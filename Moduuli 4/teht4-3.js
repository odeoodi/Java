// print Name, link to details (url), medium image and summary

'use strict';

const moviesForm = document.querySelector('#movie-form');
const listOfShows = document.getElementById('results');

const newSearch = document.getElementById('send-button');

newSearch.addEventListener('click', function(event) {
  listOfShows.innerHTML = '';
});

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
      const article = document.createElement('article');
      const h3 = document.createElement('h3');
      h3.textContent = item.show.name;
      // then add the information line by line to the list, first url
      const p = document.createElement('p');
      article.appendChild(h3);
      listOfShows.appendChild(article);
      const a = document.createElement('a');
      a.href = item.show.url;
      a.target = '_blank';
      a.textContent = `Link to: ${item.show.name}`;
      p.appendChild(a);
      article.appendChild(p);
      // then image, medium
      const p2 = document.createElement('p');
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.src = item.show.image?.medium;
      img.alt = `The cover photo for the show ${item.show.name}`;
      figure.appendChild(img);
      p2.appendChild(figure);
      article.appendChild(p2);
      // then summary
      const p3 = document.createElement('p');
      const div = document.createElement('div');
      div.innerHTML = item.show.summary;
      p3.appendChild(div);
      article.appendChild(p3);
    });
  } catch (error) {
    console.log('error ', error.message);
  }
});










