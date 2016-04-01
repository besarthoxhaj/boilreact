'use strict';

import React, { Component } from 'react';

export default class Button extends Component {
  getStyle () {
    return {
      background: {
        background: '#0091CC',
        display: 'block',
        height: '40px',
        width: '100%',
        border: '1px solid #262626',
        textAlign: 'center',
        margin: '5px',
      }
    }
  }
  render(){
    return (
      <div onClick={this.props.onClick} style={this.getStyle().background}>
        <div style={this.getStyle().boxContainer}>
          <div style={this.getStyle().centerBox}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
