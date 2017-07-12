import React from 'react';
import type { Children } from 'react';
import { connect } from 'react-redux';

import Header from '../Header';
import Footer from '../Footer';
import PageRouter from '../PageRouter';
import ModalRouter from '../ModalRouter';
import AlertRouter from '../AlertRouter';
import config from '../../config';

export class AppComp extends React.Component {

  componentDidMount() {
    console.log(`@${config('version')}`);
  };

  render() {
    return (
      <div>
        <AlertRouter />
        <ModalRouter />
        <div style={this.getStyle()}>
          <Header />
          <PageRouter history={this.props.history} />
          <Footer />
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

export const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export const mergeProps = (
  stateProps,
  dispatchProps,
  ownProps
) => {
  return {
    ...stateProps,
    ...ownProps,
  };
};

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(AppComp);
