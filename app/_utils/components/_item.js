import React from 'react';

export default class Item extends React.Component {

  constructor(props) {
    super(props);
    this.getContStyle = this.getContStyle.bind(this);
    this.getStyle = this.getStyle.bind(this);
  };

  render() {
    return (
      <li style={this.getContStyle()}>
        <a href={`/test/html/${this.props.numId}.html`}>
          <div style={this.getStyle()}>
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
  };

  getContStyle() {
    return {
      listStyle: 'none',
      margin: 5,
    };
  };

  getStyle() {
    return {
      display: 'flex',
      flexDirection: 'column',
    };
  };
}
