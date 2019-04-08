import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

 

  constructor(props){
    super(props)
    this.state = {
      username:props.username
    }
  }

  handleLogin = () => {
    this.props.onLogin({
      username: this.state.username,
      loggedIn: true
    });
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <input onChange={this.handleChange} type="text" value={this.state.username} />
        <button onClick={this.handleLogin}>Log In</button>
      </div>
    );
  }
}
