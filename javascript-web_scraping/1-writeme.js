#!/usr/bin/node
const { argv } = require('process');
const fs = require('fs');

/*
 In this case, I'm also working asynchronously, but I'll be using three async functions: OPEN, WRITE(FD, STRING[, POSITION[, ENCODING]], and CALLBACK), and then the CLOSE.
*/

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
