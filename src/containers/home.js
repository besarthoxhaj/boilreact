'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import Home from '../components/home.js';
import * as NavigationActions from '../actions/router.js';
import * as LoginActions from '../actions/login.js';

const actionCreators = {
  ...NavigationActions,
  ...LoginActions
};

class HomeContainer extends Component {
  render(){
    return (<Home {...this.props}/>);
  }
};

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps,actionCreators)(HomeContainer);
