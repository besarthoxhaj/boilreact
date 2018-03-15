import React from 'react';
import ReactDOM from 'react-dom';

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

type Props = {
  isOpen: boolean,
  className: string,
};

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    if(this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }
    this.defaultNode = null;
  }

  render() {

    if(!canUseDOM) {
      return null;
    }

    if(!this.props.isOpen) return null;

    if(!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      this.defaultNode.id = 'passpicker';
      this.defaultNode.className = this.props.className || 'portal__overlay';
      document.body.appendChild(this.defaultNode);
    }

    return ReactDOM.createPortal(
      this.props.children,
      this.props.node || this.defaultNode
    );
  }
}
