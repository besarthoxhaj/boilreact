'use strict';

import React, { Component } from 'react';

export default class Header extends Component {
  getStyle(){
    return {
      height: '80px',
      borderBottom: '1px solid #dedede',
    }
  }
  render(){
    return (
      <div style={this.getStyle()}></div>
    );
  }
}
