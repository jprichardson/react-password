var React = require('react')
var ReactPassword = require('../../')

var App = React.createClass({
  displayName: 'App',

  getInitialState: function () {
    return { checked: false }
  },

  handleCheckChange: function (event) {
    this.setState({checked: !this.state.checked})
  },

  handlePasswordChange: function (event) {
    console.log(this.refs.password.state.value)
  },

  render: function () {
    return (
      <div>
        <ReactPassword ref="password" value='super secret' revealed={ this.state.checked } maxLength="25" onChange={ this.handlePasswordChange } id="secret-password"/>
        <br/>
        <input type='checkbox' onChange= { this.handleCheckChange } checked={ this.state.checked ? 'checked' : null } />
        Reveal password.
        <br/>
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
