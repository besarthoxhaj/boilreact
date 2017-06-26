import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';

import * as alertActions from './actions';

class AlertRouter extends Component {

  constructor(props) {
    super(props);
    this.getStyle = this.getStyle.bind(this);
    this.getDisplay = this.getDisplay.bind(this);
    this.getAlertStyle = this.getAlertStyle.bind(this);
  };

  render() {
    return (
      <Motion
        defaultStyle={{x:0,y:-300}}
        style={this.getStyle()}
      >
        {({x, y}) => {
          return (
            <div style={this.getAlertStyle(x,y)}>
              <h1>Alert</h1>
              <button
                data-alert-click="closeAlert"
                onClick={this.props.closeAlert}
              >Close Alert</button>
            </div>
          );
        }}
      </Motion>
    );
  };

  getStyle () {
    return {
      x: this.props.isVisible ? spring(0.7) : spring(0),
      y: this.props.isVisible ? spring(0) : spring(-300),
    };
  };

  getDisplay(x) {
    const { isVisible } = this.props;
    return (!isVisible && x < 0.25) ? 'none' : 'block';
  };

  getAlertStyle(x,y) {
    return {
      position: 'absolute',
      top: y,
      width: 300,
      height: 300,
      backgroundColor: 'red',
      left: '35%',
      zIndex: 3,
      display: this.getDisplay(x)
    };
  };
}

export const mapStateToProps = (
  state
) => {
  return {
    isVisible: state.alertRouter.isVisible
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
    closeAlert: () => {
      dispatch(alertActions.reset());
    }
  };
};

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(AlertRouter);
