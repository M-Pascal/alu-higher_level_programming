#!/usr/bin/node
const { argv } = require('process');
const request = require('request');
request(argv[2], (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }
  const fs = require('fs');
  fs.writeFile(argv[3], body, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
