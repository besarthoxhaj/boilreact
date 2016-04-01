'use strict';

import React, { Component } from 'react';
import Button from './utils/button.js';

export default class Login extends Component {
  getStyle () {
    return {
      outer: {
        display: 'block',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%', /* Full width */
        height: '100%', /* Full height */
        backgroundColor: 'rgb(0,0,0)', /* Fallback color */
        backgroundColor: '#CE9B64' /* Black w/ opacity */
      },
      inner: {
        position: 'fixed',
        width: '300px',
        height: '100%',
        margin: '30% auto', // Will not center vertically and won't work in IE6/7.
        left: 0,
        right: 0,
      },
      inputs: {
        width: '100%',
        margin: '5px',
        height: '40px'
      }
    }
  }
  render(){
    return (
      <div style={this.getStyle().outer}>
        <div style={this.getStyle().inner}>
          <input
            style={this.getStyle().inputs}
            type='text'
            onChange={(e) => this.props.updateLoginInput('email',e.target.value)}
          />
          <input
            style={this.getStyle().inputs}
            type='password'
            onChange={(e) => this.props.updateLoginInput('password',e.target.value)}
          />
          <Button onClick={this.props.submitLogin}>Login</Button>
        </div>
      </div>
    );
  }
}
