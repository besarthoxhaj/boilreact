'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import Header from './header.js';
import Sidebar from './sidebar.js';
import * as NavigationActions from '../actions/router.js';
import _routes from '../routing/routes.js';

const actionCreators = {
  ...NavigationActions
};

class Router extends Component {
  getStyles(){
    return {
      order: 2,
      flex: 3,
      backgroundColor: '#BCD39B'
    };
  }
  render(){
    const Component = _routes[this.props.router.route.name].component;
    const fullProps = {...this.props,routeProps:{...this.props.router.route.props}};
    return (
      <div style={this.getStyles()}>
        <Header/>
        <Component {...fullProps}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps,actionCreators)(Router);
