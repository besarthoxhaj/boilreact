'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import Header from '../components/header.js';
import * as NavigationActions from '../actions/router.js';

const actionCreators = {
  ...NavigationActions,
};

class HeaderContainer extends Component {
  render(){
    return (<Header {...this.props}/>);
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, actionCreators)(HeaderContainer);
