'use strict';

const fs = require('fs');
const dataDir = fs.realpathSync(`${__dirname}/../data/`);

const data = fs.readdirSync(dataDir).filter(file => {
  return file.match(/\.json/i);
}).reduce((store,file) => {
  store[file.split('.json')[0]] = require(`${dataDir}/${file}`);
  return store;
},{});

module.exports = data;
