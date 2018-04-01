import React from 'react';
import styled from 'styled-components';
import Portal from '../Portal';

const DivOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(65, 77, 84, 0.3);
  z-index: 300;
`;

export default class Overlay extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.isOpen) return null;

    return (
      <Portal isOpen={this.props.isOpen}>
        <DivOverlay>
          {this.props.children}
        </DivOverlay>
      </Portal>
    );
  }
}
