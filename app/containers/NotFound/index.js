import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector as createSelector } from 'reselect';

class NotFound extends React.PureComponent {
  render() {
    return (
      <h1>Ops...</h1>
    );
  };
}

const mapStateToProps = createSelector({});

const mergeProps = (
  stateProps,
  dispatchProps,
  ownProps
) => {
  return {};
};

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(NotFound);
