import * as R from 'ramda';
import path from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { html } from 'js-beautify';
import phantom from 'phantom';

const SNAP_PATH = `${process.cwd()}/tests/_snapshots`;

export default function snapShot(metaObj, htmlOutput) {

  const { numId } = metaObj;

  const snaps = JSON.parse(
    readFileSync(`${SNAP_PATH}/index.json`,`utf8`)
  );

  // START -------------------------------------
  snaps[numId] = metaObj;

  writeFileSync(
    `${SNAP_PATH}/html/${numId}.html`,
    htmlOutput,
    'utf8'
  );

  createPreview(numId,htmlOutput);

  // writeFileSync(
  //   `${SNAP_PATH}/index.json`,
  //   JSON.stringify(snaps,undefined,2),
  //   'utf8'
  // );
  // END ---------------------------------------

  const data = Object.keys(snaps).map(elm => {
    return snaps[elm];
  });

  const domStr = html(renderHtml(data), {
    'indent_inner_html': true,
    'indent_size': 2,
    'unformatted': []
  });

  writeFileSync(`${SNAP_PATH}/index.html`,domStr,'utf8');
}

/**
 * Render HTML as string.
 * Used to create the `index.html`
 * file with the lists of tests
 * and image preview
 */
function renderHtml(data) {
  const React = require('react');
  const ReactDom = require('react-dom/server');

  class Item extends React.Component {
    render() {
      return (
        <li>
          <a href={`/test/html/${this.props.numId}.html`}>
            <div>
              <img
                src={`/test/imgs/${this.props.numId}.png`}
                height={250}
                width={250}
              />
              <span>{this.props.mess}</span>
            </div>
          </a>
        </li>
      );
    }
  }

  class List extends React.Component {
    render() {
      const { props } = this;
      return (
        <html>
          <head></head>
          <body>
            <div>
              <ul>
                {props.list.map((elm,idx) => {
                  return (
                    <Item key={`item=${idx}`} {...elm} />
                  );
                })}
              </ul>
            </div>
          </body>
        </html>
      );
    }
  };

  return ReactDom.renderToStaticMarkup(<List list={data} />);
}

/**
 * Create image preview of the page.
 * For more info check:
 * - http://stackoverflow.com/q/23795913
 * - https://git.io/v9lgl
 */
function createPreview(numId, html) {
  let _ph, _page, _outObj;
  phantom.create().then(ph => {
    _ph = ph;
    return _ph.createPage();
  }).then(page => {
    _page = page;

    _page.property('viewportSize',{
      width:800,
      height:600
    });
    _page.property('content', html);

    return _page.render(`${SNAP_PATH}/imgs/${numId}.png`);
  }).then(() => {
    console.log('# PHANTOM: saved snap');
    // _page.close();
    _ph.exit();
  }).catch(err => {
    console.log('PHANTOM ERROR:',err);
  });
}
