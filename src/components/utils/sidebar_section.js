'use strict';

import React, { Component } from 'react';

export default class SidebarSection extends Component {
  constructor(props){
    super(props);
    this.state = {hover:false};
    this.toggleHover = this.toggleHover.bind(this);
  }
  toggleHover(){
    this.setState({hover:!this.state.hover});
  }
  getStyle(){
    return {
      normal: {
        height: '50px',
        width: '100%',
        textAlign: 'center',
        lineHeight: '50px'
      },
      hover: {
        height: '50px',
        width: '100%',
        textAlign: 'center',
        lineHeight: '50px',
        backgroundColor: 'red',
        cursor: 'pointer'
      }
    };
  }
  render(){
    return (
      <li
        style={this.state.hover ? this.getStyle().hover : this.getStyle().normal}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </li>
    );
  }
}
