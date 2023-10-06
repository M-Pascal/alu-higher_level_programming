#!/usr/bin/node
const { argv } = require('process');
const fs = require('fs');

if (argv[2]) {
  fs.readFile(argv['2'], 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
} else {
  console.log('An Error occured no file(path) was given');
}
