var assert = require('assert')
var jsdom = require('jsdom')

/* global beforeEach, describe, it */

describe('react-password', function () {
  var React, ReactPassword, TestUtils

  beforeEach(function () {
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
    global.window = document.parentWindow
    global.navigator = {
      userAgent: 'node.js'
    }

    React = require('react/addons')
    ReactPassword = require('../')
    TestUtils = React.addons.TestUtils
  })

  describe('> when revealed is false', function () {
    it('should be of type password', function () {
      var renderedComponent = TestUtils.renderIntoDocument(<ReactPassword revealed={ false }/>)
      var inputComponent = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'react-password')
      var inputElement = React.findDOMNode(inputComponent)
      assert.strictEqual(inputElement.getAttribute('type'), 'password')
    })
  })

  describe('> when revealed is true', function () {
    it('should be of type password', function () {
      var renderedComponent = TestUtils.renderIntoDocument(<ReactPassword revealed={ true }/>)
      var inputComponent = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'react-password')
      var inputElement = React.findDOMNode(inputComponent)
      assert.strictEqual(inputElement.getAttribute('type'), 'text')
    })
  })

  describe('> when value is set', function () {
    it('should set state value', function () {
      var value = 'super secret'
      var renderedComponent = TestUtils.renderIntoDocument(<ReactPassword value={ value }/>)
      var inputComponent = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'react-password')
      var inputElement = React.findDOMNode(inputComponent)
      assert.strictEqual(renderedComponent.state.value, value)
      assert.strictEqual(inputElement.getAttribute('value'), value)
    })
  })

  describe('> when other properties are set', function () {
    it('should pass those along', function () {
      var renderedComponent = TestUtils.renderIntoDocument(<ReactPassword maxLength='25'/>)
      var inputComponent = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'react-password')
      var inputElement = React.findDOMNode(inputComponent)
      assert.strictEqual(inputElement.getAttribute('maxlength'), '25')
    })
  })
})
