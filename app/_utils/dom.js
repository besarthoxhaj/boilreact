import cheerio from 'cheerio';
import { readFileSync } from 'fs';
import path from 'path';
import nodeSass from 'node-sass';

const PATH = process.cwd();
const svgSymbols = readFileSync(`${PATH}/assets/svg-symbols.html`,`utf8`);
const { css } = nodeSass.renderSync({file:`${PATH}/sass/entry.scss`});

export default `
<!DOCTYPE html>
<html>
  <head>
    <style>
      ${css}
    </style>
  </head>
  <body>
    <div style="display:none;">
      ${svgSymbols}
    </div>
    <div id="root"></div>
  </body>
</html>
`;
