const R = require('ramda');
const cheerio = require('cheerio');
const fs = require('fs');
const html = require('html');

module.exports = (config) => {

  const opts = R.merge({
    src: './assets/svg-symbols.html',
    dest: './app/index.html',
  }, config);

  return () => {

    const outputFile = require('fs').readFileSync(opts.dest).toString();
    const inputFile = require('fs').readFileSync(opts.src).toString();

    const doc = cheerio(outputFile);
    const body = doc.find('body');

    // check if the `data-svg-symbols` is
    // already present
    body.find('[data-svg-symbols]').remove();
    body.prepend(`<div data-svg-symbols class="[ u-hidden ]">${inputFile}</div>`);

    fs.writeFileSync(
      opts.dest,
      html.prettyPrint(doc.toString(),{indent_size:2}),
      'utf8'
    );
  };
};
