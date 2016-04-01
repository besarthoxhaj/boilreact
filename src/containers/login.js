'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import Login from '../components/login.js';
import * as NavigationActions from '../actions/router.js';
import * as LoginActions from '../actions/login.js';

const actionCreators = {
  ...NavigationActions,
  ...LoginActions
};

class LoginContainer extends Component {
  render(){
    return (<Login {...this.props}/>);
  }
};

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps,actionCreators)(LoginContainer);
