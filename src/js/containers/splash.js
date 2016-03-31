'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as NavigationActions from '../actions/router.js';
import Splash from '../components/splash.js';

const actionCreators = {
  ...NavigationActions,
};

class SplashContainer extends Component {

  render(){
    return <Splash/>;
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps,actionCreators)(SplashContainer);
