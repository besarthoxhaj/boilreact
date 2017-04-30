import { prettyPrint } from 'html';

export default function(txt, elm) {

  const opts = {indent_size: 2};

  if(elm === undefined) {
    const html = prettyPrint(txt, opts);
    // console.log(html);
    return html;
  }

  const html = prettyPrint(txt, opts);
  // console.log(txt,html);
  return html;
};
