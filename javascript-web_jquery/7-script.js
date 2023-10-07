#!/usr/bin/node
$(function () {
  $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', (jsonData, textStatus) => {
    $('DIV#character').text(jsonData.name);
  });
});
