import React from 'react';
import type { Children } from 'react';
import { connect } from 'react-redux';

import Header from '../Header';
import Router from '../Router';
import Modal from '../Modal';
import Alert from '../Alert';

export class AppComp extends React.Component {
  render() {
    return (
      <div>
        <Alert />
        <Modal />
        <div style={this.getStyle()}>
          <Header />
          <Router history={this.props.history} />
        </div>
      </div>
    );
  };

  getStyle() {
    return {
      position:'absolute',
      zIndex:1,
      bottom:0,
      top:0,
      right:0,
      left:0,
    };
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
)(AppComp);
