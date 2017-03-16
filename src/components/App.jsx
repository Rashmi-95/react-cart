import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'anandujjwal13@gmail.com',
      name: 'New User'
    }
  }
  updateEmail(newEmail, newName) {
    this.setState({ email: newEmail, name: newName })
  }
  render() {
    return (
      <div className="blue full">
        {
          React.cloneElement(
            this.props.children,
            {
              email: this.state.email,
              name: this.state.name,
              updateEmail: this.updateEmail.bind(this)
            }
          )
        }
      </div>
    );
  }
}
