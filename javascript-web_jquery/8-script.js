#!/usr/bin/node
$.get('https://swapi-api.alx-tools.com/api/films/?format=json', (object, textStatus) => {
  console.log(object);
  const resultArray = object.results;
  resultArray.forEach((element, index, array) => {
    const listItem = $('<li></li>');
    listItem.text(element.title);
    listItem.appendTo($('UL#list_movies'));
  });
});
