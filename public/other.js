'use strict';

module.exports = () => {
  let handlebars = require('handlebars');

  var request = new XMLHttpRequest();
  request.open('GET', '/books.json', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 300) {
      var books = JSON.parse(request.responseText);
      console.log(books);
      renderBooks(books);
    } else {
      console.log(`Error: Code: ${request.status} Message: ${request.responseText}`);
    }
  };

  request.onerror = function(event) {
    console.log(`Request error: ${event}`);
  };

  request.send();

  function renderBooks(books) {
    let booksTemplateScript = document.querySelector('#books-template').innerHTML;
    let booksTemplate = handlebars.compile(booksTemplateScript);
    let temp = booksTemplate(books);
    console.log(temp);
    document.querySelector('#books-list').innerHTML = temp;
    document.querySelector('.other.page').style.display = '';
  }

}
