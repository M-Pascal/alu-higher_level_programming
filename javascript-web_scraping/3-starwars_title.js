#!/usr/bin/node

const https = require('https');

if (process.argv.length !== 3) {
  console.error('Usage: script.js <movie_id>');
  process.exit(1);
}

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

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
      console.error(`Movie with ID ${movieId} not found.`);
    }
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
