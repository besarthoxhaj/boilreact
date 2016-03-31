'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from './router.js';
import Modal from './modal.js';
import Sidebar from './sidebar.js';
import * as NavigationActions from '../actions/router.js';

const actionCreators = {
  ...NavigationActions
};

class AppContainer extends Component {

  render(){
    return (
      <div>
        <Sidebar/>
        <Router/>
        <Modal/>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps,actionCreators)(AppContainer);
