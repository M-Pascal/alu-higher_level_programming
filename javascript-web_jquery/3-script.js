#!/usr/bin/node
$('DIV#red_header').on('click', function (event) {
  const headerObj = $('header');
  headerObj.addClass('red');
  console.log(headerObj.hasClass('red'));
});
