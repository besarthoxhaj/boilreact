'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import Overview from '../components/overview.js';
import * as NavigationActions from '../actions/router.js';
import * as LoginActions from '../actions/login.js';

const actionCreators = {
  ...NavigationActions,
  ...LoginActions
};

class OverviewContainer extends Component {
  render(){
    return (<Overview {...this.props}/>);
  }
};

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps,actionCreators)(OverviewContainer);
