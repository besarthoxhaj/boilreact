'use strict';

import React, { Component } from 'react';

export default class Sidebar extends Component {
  getStyle () {
    return {
      order: 1,
      flex: 1,
      backgroundColor: '#CE9B64'
    }
  }
  render(){

    if (this.props.visible) {
      return (
        <div style={this.getStyle()}>
          Navbar contents<br/ >( Box 2 )
        </div>
      );
    } else {
      return (null);
    }
  }
}
