#!/usr/bin/node
const { argv } = require('process');
const request = require('request');

if (argv[2]) {
  const uri = `https://swapi-api.alx-tools.com/api/films/${argv[2]}`;
  const options = {
    method: 'GET',
    uri: `https://swapi-api.alx-tools.com/api/films/${argv[2]}`
  };
  request(uri, options, (err, response, body) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(JSON.parse(body).title);
  });
} else {
  console.log('An error occured missing url command line arg.');
}
