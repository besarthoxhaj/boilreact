'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import Alert from '../components/alert.js';
import * as AlertActions from '../actions/modal.js';

const actionCreators = {
  ...AlertActions,
};

class AlertContainer extends Component {
  render(){
    return (<Alert {...this.props}/>);
  }
};

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps,actionCreators)(AlertContainer);
