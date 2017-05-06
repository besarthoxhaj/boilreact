const fs = require('fs');
const rimraf = require('rimraf');

const PATH = process.cwd();

// delete everything
rimraf.sync(`${PATH}/tests/_snapshots`);

// create from scratch
fs.mkdirSync(`${PATH}/tests/_snapshots`);
fs.mkdirSync(`${PATH}/tests/_snapshots/html`);
fs.mkdirSync(`${PATH}/tests/_snapshots/imgs`);
fs.writeFileSync(`${PATH}/tests/_snapshots/index.json`,"{}");
