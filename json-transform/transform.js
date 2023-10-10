const { pokemon } = require('./pokemon.json');

const fs = require('fs');

fs.writeFile('./pokemon.json', JSON.stringify(pokemon), (err) => {
});