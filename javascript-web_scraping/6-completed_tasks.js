#!/usr/bin/node
const { argv } = require('process');
const request = require('request');

request(argv[2], (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }
  const data = JSON.parse(body);
  const objs = {};
  for (let i = 0; i < data.length; i++) {
    const userId = data[i].userId;
    const completed = data[i].completed;
    if (objs[`${userId}`] === undefined) {
      if (!completed) {
        continue;
      } else {
        objs[`${userId}`] = 1;
      }
    } else {
      if (!completed) {
        continue;
      } else {
        objs[`${userId}`]++;
      }
    }
  }
  console.log(objs);
});
