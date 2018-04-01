import React from 'react';
import type { Children } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';
import PageRouter from '../PageRouter';
import ModalRouter from '../ModalRouter';
import AlertRouter from '../AlertRouter';
import config from '../../config';

const DivBody = styled.div`
  position: 'absolute';
  z-index: 1;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
`;

export class AppComp extends React.Component {

  componentDidMount() {
    console.log(`@${config('version')}`);
  };

  render() {
    return (
      <div>
        <AlertRouter />
        <ModalRouter />
        <DivBody>
          <Header />
          <PageRouter history={this.props.history} />
          <Footer />
        </DivBody>
      </div>
    );
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
