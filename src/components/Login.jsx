import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="carousel">
          <ul className="header">
            <li><IndexLink to="/signin" activeClassName="active">Sign In</IndexLink></li>
            <li><Link to="/signup" activeClassName="active">Sign up</Link></li>
          </ul>
          {this.props.children}
        </div>
      </div>
    );
  }
}
