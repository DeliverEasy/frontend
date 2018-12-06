import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import loginUser from '../../actions';
import './styles.scss';

import Input from '../Input';
import Button from '../Button';

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
            <div className="login-form">
                <div className="form-elements">
                    <Input name="username" type="text" placeholder="Email" onChange={this.handle_change} />
                    <Input name="password" type="password" placeholder="Password" onChange={this.handle_change} />
                    <Button text="Login" onClick={e => this.handle_login(e, this.state)} />
                </div>
            </div>
            );
    }
}

export default connect(null, { loginUser })(LoginForm);