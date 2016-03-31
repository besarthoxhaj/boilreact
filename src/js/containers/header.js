'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as NavigationActions from '../actions/router.js';
import _routes from '../routing/routes.js';

const actionCreators = {
  ...NavigationActions,
};

class HeaderContainer extends Component {

  render(){

    const Header = _routes[this.props.router.route.name].config.header;

    const allProps = {
      ...this.props,
      routeConfig: {
        ..._routes[this.props.router.route.name].config
      }
    };

    return (
      <Header {...allProps}/>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, actionCreators)(HeaderContainer);
