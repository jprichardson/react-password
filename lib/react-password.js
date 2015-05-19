var React = require('react')

var ReactPassword = React.createClass({
  displayName: 'ReactPassword',

  getInitialState: function () {
    return {
      value: this.props.value || ''
    }
  },

  getDefaultProps: function () {
    return {
      onChange: Function(),
      revealed: false,
      value: ''
    }
  },

  handleChange: function (event) {
    this.setState({value: event.target.value})
    this.props.onChange(event)
  },

  propTypes: {
    onChange: React.PropTypes.func,
    revealed: React.PropTypes.bool,
    value: React.PropTypes.string
  },

  render: function () {
    var val = this.state.value
    var {revealed, ...other} = this.props

    return (
      <input {...other} type={ revealed ? 'text' : 'password' } value={ val } onChange={ this.handleChange } className='react-password'/>
    )
  }
})

module.exports = ReactPassword
