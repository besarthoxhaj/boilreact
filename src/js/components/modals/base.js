'use strict';

import React, { Component } from 'react';

export default class Base extends Component {
  getStyle () {
    return {
      background: {
        display: 'block', /* Hidden by default */
        position: 'fixed', /* Stay in place */
        zIndex: 1, /* Sit on top */
        left: 0,
        top: 0,
        width: '100%', /* Full width */
        height: '100%', /* Full height */
        overflow: 'auto', /* Enable scroll if needed */
        backgroundColor: 'rgb(0,0,0)', /* Fallback color */
        backgroundColor: 'rgba(0,0,0,0.4)' /* Black w/ opacity */
      },
      box: {
        backgroundColor: '#fefefe',
        margin: '15% auto', /* 15% from the top and centered */
        padding: '20px',
        border: '1px solid #888',
        width: '80%' /* Could be more or less, depending on screen size */
      },
      close: {
        color: '#aaa',
        float: 'right',
        fontSize: '28px',
        fontWeight: 'bold'
      }
    }
  }
  render(){

    if (this.props.visible) {
      return (
        <div style={this.getStyle().background}>
          <div style={this.getStyle().box}>
            <span
              style={this.getStyle().close}
            >x</span>
              {this.props.children}
          </div>
        </div>
      );
    } else {
      return (null);
    }
  }
}