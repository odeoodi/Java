'use strict'

const target = document.getElementById('target')

const itemList = ['First item', 'Second item', 'Third item'] // making an array of the items

itemList.forEach((text,index) => {
  const li  = document.createElement('li')  // creating new list items that are empty
  li.textContent = text // assigning content to list items

  if (index ===1) { // checking if the list item's index is 1 and adding class my-item to that item
    li.classList.add('my-item')
  }
  target.appendChild(li)
})



