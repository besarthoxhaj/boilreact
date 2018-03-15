import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';
import { push } from 'react-router-redux';

import c from '../../constants';

class ModalRouter extends Component {

  constructor(props) {
    super(props);
    this.getStyle = this.getStyle.bind(this);
    this.getDisplay = this.getDisplay.bind(this);
  };

  render() {
    return (
      <Motion defaultStyle={{x: 0}} style={this.getStyle()}>
        {({x}) => {
          return (
            <div
              style={{
                position: 'absolute',
                zIndex: 2,
                display: this.getDisplay(x),
                backgroundColor: `rgba(0, 0, 0, ${x})`,
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
              }}>
              <div
                style={{
                  backgroundColor: 'white',
                  margin: 'auto',
                  width: 200,
                  height: 200,
                }}
              >
                <h1>Modal!</h1>
                <button
                  data-modal-click="closeModal"
                  onClick={this.props.closeModal}
                >Close Modal</button>
                <button
                  data-modal-click="openAlert"
                  onClick={this.props.openAlert}
                >Open Alert</button>
              </div>
            </div>
          );
        }}
      </Motion>
    );
  };

  getStyle () {
    return {
      x: this.props.isVisible ? spring(0.7) : spring(0)
    };
  };

  getDisplay(x) {
    const { isVisible } = this.props;
    return (!isVisible && x < 0.25) ? 'none' : 'block';
  };
}

export const mapStateToProps = (
  state
) => {
  return {
    isVisible: state.modalRouter.isVisible
  };
};

export const mergeProps = (
  stateProps,
  dispatchProps,
  ownProps
) => {

  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    closeModal: () => {
      dispatch({type:c.MODAL_DISMISS});
    },
    openAlert: () => {
      dispatch({type:c.SHOW_ALERT});
    },
  };
};

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(ModalRouter);
