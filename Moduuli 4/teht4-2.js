'use strict'

const moviesForm = document.querySelector('#movie-form')

moviesForm.addEventListener('submit', async function(evt) {
  evt.preventDefault()
  const movie = document.querySelector('input[name=q]').value
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${movie}`, {mode: 'no-cors'})
    const jsonData = await response.json()
    console.log(jsonData)
  }
  catch (error) {
    console.log(error.message)
  }
})
