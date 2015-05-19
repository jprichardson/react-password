var React = require('react')
var ReactPassword = require('../../')

var App = React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <div>
        <ReactPassword />
      </div>
    )
  }
})


window.onload = function () {
  React.render(
    <App/>,
    document.querySelector('.app')
  )
}

console.log('hi')
