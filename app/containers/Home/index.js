import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector as createSelector } from 'reselect';

import c from '../../constants';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
    this.updateSearch = this.updateSearch.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button
          data-home-click="openModal"
          onClick={this.props.openModal}
        >Open Modal</button>
        <button
          data-home-click="goToCounter"
          onClick={this.props.goToCounter}
        >Counter</button>
        <input
          data-search-input="changeText"
          type='text'
          onChange={this.updateSearch}
          onKeyDown={this.sendSearch}
          value={this.state.searchValue}
        />
      </div>
    );
  };

  updateSearch({target:{value}}) {
    this.setState({searchValue:value});
  };

  sendSearch(evt) {
    if(evt['key'] === 'Enter') {
      evt.preventDefault();
      this.props.sendSearch(this.state['searchValue']);
    }
  };
}

export const mapStateToProps = createSelector({});

export const mergeProps = (stateProps, dispatchProps, ownProps) => {

  const { dispatch } = dispatchProps;

  return {
    openModal: () => {
      dispatch(push({
        pathname: '/',
        search:'entry=77',
        query:{entry:'77'},
      }));
      dispatch({type:c.MODAL_SHOW});
    },
    goToCounter: () => {
      dispatch(push('/count'));
    },
    sendSearch(search:string) {
      console.log('sendSearch',search);
    },
  };
};

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(Home);
