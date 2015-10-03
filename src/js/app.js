'use strict';

var React = require('react')

var App = React.createClass({
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = App

