import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import loginUser from '../../actions';
import './styles.scss';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name + ' ' + value)
    this.setState(prevstate => {
      const newState = {
        ...prevstate
      };
      newState[name] = value;
      return newState;
    });
  };

  handle_login = (e, creds) => {
    this.props.loginUser(creds);
  }

  render() {
    return (
      <div>
        <form>
          <input name="username" type="text" placeholder="Email" value={this.state.username} onChange={this.handle_change} />
          <input name="password" type="password" placeholder="Password" onChange={this.handle_change} value={this.state.password} />
          <button type="button" onClick={e => this.handle_login(e, this.state)}>Login</button>
        </form>

      </div>);
  }
}

export default connect(null, { loginUser })(LoginForm);