'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import Modal from '../components/modals/base.js';
import _modals from '../routing/modals.js';
import * as ModalActions from '../actions/modal.js';

const actionCreators = {
  ...ModalActions,
};

class ModalsContainer extends Component {

  render(){

    const Content = _modals[this.props.modal.route] || ('');
    const fullProps = {...this.props,modalProps:{...this.props.modal.props}};

    return (
      <Modal
        visible={this.props.modal.isVisible}
        transparent={this.props.modal.transparent}
        animated={this.props.modal.animated}
      >
        <Content {...fullProps}/>
      </Modal>
    );
  }
};

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps,actionCreators)(ModalsContainer);
