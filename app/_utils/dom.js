import cheerio from 'cheerio';
import { readFileSync } from 'fs';
import path from 'path';

const PATH = process.cwd();
const svgSymbols = readFileSync(`${PATH}/assets/svg-symbols.html`,`utf8`);
const compiledCss = readFileSync(`${PATH}/build/main.css`,`utf8`);

export default `
<!DOCTYPE html>
<html>
  <head>
    <style>
      ${compiledCss}
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
