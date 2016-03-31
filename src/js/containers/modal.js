'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as NavigationActions from '../actions/router.js';
import _routes from '../routing/routes.js';

const actionCreators = {
  ...NavigationActions,
};

class HeaderContainer extends Component {

  render(){
    return (<h1>Modal</h1>);
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, actionCreators)(HeaderContainer);
