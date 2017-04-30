import * as R from 'ramda';
import path from 'path';
import process from 'process';
import { readFileSync, writeFileSync } from 'fs';
import cheerio from 'cheerio';
import log from './log';

export default function snapShot(numId, htmlOutput) {

  const currentPath = process.cwd();
  const snapPath = `${currentPath}/tests/_snapshots`;
  const indexStr = readFileSync(`${snapPath}/index.html`,'utf8');
  const indexHtml = cheerio(indexStr);

  const listItems = R.pipe(
    (dom) => dom.find('[data-key]'),
    (elm) => elm.toArray(),
    R.map(item => item.attribs['data-key'])
  )(indexHtml);

  if(listItems.length === 0) {
    const html = [
      '<!doctype html>',
      '<html>',
      '  <body>',
      `    <a data-key="${numId}" href="/test/${numId}.html">${numId}</a>`,
      '  </body>',
      '</html>',
    ].join('\n');
    writeFileSync(`${snapPath}/index.html`, html, 'utf8');
    writeFileSync(`${snapPath}/${numId}.html`, htmlOutput, 'utf8');
    return;
  }

  if(listItems.indexOf(numId) === -1) {

    const aTag = `<a data-key="${numId}" href="/test/${numId}.html">${numId}</a>`;
    const body = indexHtml.find('body');
    body.append(aTag);
    writeFileSync(`${snapPath}/index.html`, indexHtml.toString(), 'utf8');
    writeFileSync(`${snapPath}/${numId}.html`, htmlOutput, 'utf8');
  }
}
