import React from 'react'

export default React.createClass({
  propTypes: {
    options: React.PropTypes.object,
    onChange: React.PropTypes.func,
    onSubmit: React.PropTypes.func
  },
  onChange(e) {
    console.log('Hello')
    if (this.props.onChange) {
      console.log(e.target.value)
      this.props.onChange(e.target, e.target.value, e)
    };
  },
  onSubmit(e) {
    console.log('Hello')
    e.preventDefault()
    if (this.props.onSubmit) {
      this.props.onSubmit(e)
    };
  },
  render() {
    let options = {
      email: {
        label: 'Email address',
        placeholder: 'Email'
      },
      password: {
        label: 'Password',
        placeholder: 'Password'
      },
      submitButton: {
        text: 'Log In'
      }
    }
    options = Object.assign(options, this.props.options || {})
    return <div>
      <form className="signin-form">
        <div className="form-group">
          <input type="email" onChange={this.onChange} className="form-control" placeholder={options.email.placeholder} />
        </div>
        <div className="form-group">
          <input type="password" onChange={this.onChange} className="form-control" placeholder={options.password.placeholder} />
        </div>
        <button type="submit" onClick={this.onSubmit} className="btn btn-default">{options.submitButton.text}</button>
      </form>
    </div>
  }
})

