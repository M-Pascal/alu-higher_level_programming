#!/usr/bin/node

const https = require('https');
const url = `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`;

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200) {
      const movie = JSON.parse(data);
      console.log(`Episode ${movie.episode_id}: ${movie.title}`);
    } else {
      console.log(`Movie with ID ${process.argv[2]} not found.`);
    }
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
