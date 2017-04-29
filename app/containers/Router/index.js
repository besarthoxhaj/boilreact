import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Counter from '../Counter';
import Home from '../Home';

export class RouterComp extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div style={{position:'absolute',zIndex:1}}>
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
)(RouterComp);
