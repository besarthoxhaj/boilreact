'use strict';

import React, { Component } from 'react';

export default class Sidebar extends Component {
  getStyle(){
    return {
      width: '140px',
    }
  }
  render(){
    return (
      <div style={this.getStyle()}></div>
    );
  }
}
