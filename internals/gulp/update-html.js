const R = require('ramda');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const html = require('html');

module.exports = (config) => {

  const opts = R.merge({
    outputFile: 'app/index.html',
    inputFile: 'assets/svg-symbols.html',
  }, config);

  return () => {

    const outputFile = require('fs').readFileSync(
      path.resolve(process.cwd(), opts.outputFile)
    ).toString();

    const inputFile = require('fs').readFileSync(
      path.resolve(process.cwd(), opts.inputFile)
    ).toString();

    const doc = cheerio(outputFile);
    const body = doc.find('body');
    body.prepend(`<div class="[ u-hidden ]">${inputFile}</div>`);

    fs.writeFileSync(
      opts.outputFile,
      html.prettyPrint(doc.toString(),{indent_size:2}),
      'utf8'
    );
  };
};
