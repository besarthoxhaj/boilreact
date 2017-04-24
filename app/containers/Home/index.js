import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import * as modalActions from '../Modal/actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.props.openModal}>Open Modal</button>
      </div>
    );
  };
}

export const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openModal: () => {
      dispatch(push({
        pathname: '/',
        search:'entry=77',
        query:{entry:'77'},
      }));
      dispatch(modalActions.show());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
