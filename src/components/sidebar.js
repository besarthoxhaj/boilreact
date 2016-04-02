'use strict';

import React, { Component } from 'react';
import Section from './utils/sidebar_section.js';

export default class Sidebar extends Component {
  render(){
    return (
      <div>
        <ul>
          <Section>Overview</Section>
          <Section>Promotions</Section>
          <Section onClick={this.props.logOutAndClearStorage}>Logout</Section>
        </ul>
      </div>
    );
  }
}
