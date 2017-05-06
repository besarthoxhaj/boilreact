import React from 'react';
import Item from './_item';

export default class List extends React.Component {

  constructor(props) {
    super(props);
    this.getContStyle = this.getContStyle.bind(this);
  };

  render() {
    return (
      <ul style={this.getContStyle()}>
        {this.props.list.map((elm,idx) => {
          return (
            <Item key={`item=${idx}`} {...elm} />
          );
        })}
      </ul>
    );
  };

  getContStyle() {
    return {
      display: 'flex',
      flexWrap: 'wrap',
    };
  };
}
