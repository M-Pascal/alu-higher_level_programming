#!/usr/bin/node
const { argv } = require('process');
const fs = require('fs');


function closeFd (fd) {
  fs.close(fd, (err) => {
    if (err) console.log(err);
  });
}

if (argv[2]) {
  fs.open(argv[2], 'w', (err, fd) => {
    if (err) {
      console.log(err);
      return;
    }
    fs.write(fd, argv[3], (err, written, string) => {
      if (err) {
        console.log(err);
      }
      closeFd(fd);
    });
  });
} else {
  console.log('An error occurred no file(path) was given');
}
