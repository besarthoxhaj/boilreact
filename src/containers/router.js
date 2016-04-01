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
      container: {
        display:'flex',
        width:'100%'
      },
      mainContent: {
        order: 2,
        flex: 5,
        borderLeft: '1px solid #dedede',
        height: '700px'
      },
      sidebar: {
        order: 1,
        flex: 1,
        height: '700px'
      }
    };
  }
  render(){
    const route = _routes[this.props.router.route.name];
    const Component = route.component;
    const fullProps = {...this.props,routeProps:{...this.props.router.route.props}};
    return (
      <div>
        {route.config.header && (<Header/>)}
        <div style={this.getStyles().container}>
          {route.config.sidebar && (<div style={this.getStyles().sidebar}><Sidebar/></div>)}
          <div style={this.getStyles().mainContent}>
            <Component {...fullProps}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps,actionCreators)(Router);
