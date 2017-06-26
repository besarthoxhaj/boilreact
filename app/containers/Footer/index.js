import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector as createSelector } from 'reselect';

export class FooterComp extends React.PureComponent {
  render() {
    return (
      <div style={this.getStyle()}>
        <span>Footer</span>
      </div>
    );
  };
  getStyle() {
    return {
      backgroundColor:'blue',
    };
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
)(FooterComp);
