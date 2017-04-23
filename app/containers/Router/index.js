import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';

import Counter from '../Counter';
import Home from '../Home';

class App extends React.Component {

  static defaultProps = {
    style: {
      position: 'absolute',
      zIndex: 1,
    }
  };

  render() {
    return (
      <ConnectedRouter history={createHashHistory()}>
        <div
          style={{
            position: 'absolute',
            zIndex: 1,
          }}
        >
          <Route exact path='/' component={Home} />
          <Route exact path='/count' component={Counter} />
        </div>
      </ConnectedRouter>
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
