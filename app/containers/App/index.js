import React from 'react';
import type { Children } from 'react';
import { connect } from 'react-redux';

import Router from '../Router';
import Modal from '../Modal';
import Alert from '../Alert';

class App extends React.Component {
  render() {
    return (
      <div>
        <Alert />
        <Modal />
        <Router />
      </div>
    );
  };
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: dispatch,
  };
};

export const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
