import React from 'react';
import Portal from '../Portal';

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.isOpen) return (null);

    return (
      <Portal isOpen={this.props.isOpen}>
        <div className="[ overlay ]">
          {this.props.children}
        </div>
      </Portal>
    );
  }
}
