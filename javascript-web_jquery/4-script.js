#!/usr/bin/node
$('DIV#toggle_header').on('click', (event) => {
  const header = $('header');
  if (header.hasClass('green')) {
    header.removeClass('green');
    header.addClass('red');
  } else {
    header.removeClass('red');
    header.addClass('green');
  }
});
