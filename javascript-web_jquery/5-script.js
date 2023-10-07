#!/usr/bin/node
$('DIV#add_item').bind('click', (eventObject) => {
  const listCreated = $('<li></li>');
  listCreated.text('Item');
  $('UL.my_list').append(listCreated);
});
