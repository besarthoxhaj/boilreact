'use strict';

import expect from 'expect'
import React from 'react/addons'
var { change } = React.addons.TestUtils.Simulate

describe('Search component', function () {

    var Component = require('../../src/js/hello.js')
    var node

    beforeEach(function () {
        node = document.createElement('div')
    })

    it('should render the component correctly', function (done) {

        React.render((
            <Component/>
        ), node, function () {

            expect(node.querySelector('h1').innerText).toMatch(/Hello world!/)
            done()
        })
    })
})

