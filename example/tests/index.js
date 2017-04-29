import React from 'react';
import * as R from 'ramda';

const KEYCODES = { LEFT: 37, RIGHT: 39 };

export default class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [ '001', '002', '003', '004' ],
      list: [ '001', '002' ],
    };

    this.createList = this.createList.bind(this);
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.change = this.change.bind(this);
  };

  render() {
    return (
      <div>
        <div>
          <button
            data-func-next
            onClick={() => {
              this.change({keyCode:KEYCODES.RIGHT});
            }}
          >Next</button>
          <button
            data-func-prev
            onClick={() => {
              this.change({keyCode:KEYCODES.LEFT});
            }}
          >Previous</button>
        </div>
        {this.createList()}
      </div>
    );
  };

  createList() {
    return this.state.list.map((elm,idx) => {
      return (
        <h1 key={idx}>{elm}</h1>
      );
    });
  };

  change(event) {
    if (event.keyCode === KEYCODES.RIGHT) {
      this.setState({
        list: this.getNext()
      });
    }

    if (event.keyCode === KEYCODES.LEFT) {
      this.setState({
        list: this.getPrev()
      });
    }
  };

  getNext() {
    const { list, data } = this.state;
    const lastElm = list.slice(-1)[0];
    const idx = data.indexOf(lastElm);
    return list.slice(1).concat(data.slice(idx + 1, idx + 2));
  };

  getPrev() {
    const { list, data } = this.state;
    const idx = data.indexOf(list[0]);
    return [data[idx - 1]].concat(list.slice(0,-1));
  };
}
