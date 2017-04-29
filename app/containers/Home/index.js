import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import * as modalActions from '../Modal/actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <button
          data-click="openModal"
          onClick={this.props.openModal}
        >Open Modal</button>
        <button
          data-click="goToCounter"
          onClick={this.props.goToCounter}
        >Counter</button>
      </div>
    );
  };
}

export const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export const mergeProps = (stateProps, dispatchProps, ownProps) => {

  const { dispatch } = dispatchProps;

  return {
    openModal: () => {
      dispatch(push({
        pathname: '/',
        search:'entry=77',
        query:{entry:'77'},
      }));
      dispatch(modalActions.show());
    },
    goToCounter: () => {
      dispatch(push('/count'));
    }
  };
};

export default connect(mapStateToProps, undefined, mergeProps)(Counter);
