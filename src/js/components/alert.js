'use strict';

import React, { Component } from 'react';

export default class Splash extends Component {
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
      boxContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      centerBox: {
        maxWidth: '50%',
      }
    }
  }
  render(){
    if (this.props.alert.isVisible) {    
      return (
        <div style={this.getStyle().background}>
          <div style={this.getStyle().boxContainer}>
            <div style={this.getStyle().centerBox}>
              <h1>Alert</h1>
            </div>
          </div>
        </div>
      );
    } else {
      return (null);
    }
  }
}
