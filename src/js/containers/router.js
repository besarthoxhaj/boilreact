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

  render(){

    const Component = _routes[this.props.router.route.name].component;
    const fullProps = {...this.props,routeProps:{...this.props.router.route.props}};

    return (
      <div>
        <Header/>
        <Component {...fullProps}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps,actionCreators)(Router);
