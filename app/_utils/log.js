import { prettyPrint } from 'html';

export default function(txt, elm) {

  if(elm === undefined) {
    return console.log(
      prettyPrint(
        txt, {indent_size: 2}
      )
    );
  }

  return console.log(
    txt,
    prettyPrint(
      elm, {indent_size: 2}
    )
  );
};
