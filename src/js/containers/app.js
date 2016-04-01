'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from './router.js';
import Modal from './modal.js';
import Alert from './alert.js';
import Sidebar from './sidebar.js';
import * as NavigationActions from '../actions/router.js';

const actionCreators = {
  ...NavigationActions
};

class AppContainer extends Component {
  getStyles(){
    return {
      display: 'flex',
      width: '100%'
    };
  }
  render(){
    return (
      <div style={this.getStyles()}>
        <Sidebar/>
        <Router/>
        <Modal/>
        <Alert/>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps,actionCreators)(AppContainer);
