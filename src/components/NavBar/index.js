import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import './styles.scss';
import LoginForm from '../LoginForm';

class NavBar extends Component {

    render() {
        if (this.props.isAuthenticated) {
            return (
                <div>
                    {localStorage.token}
                    <button onClick={e => this.props.logoutUser()}>Logout</button>
                </div>);
        } else {
            return (<div><LoginForm /></div>);
        }
    }
}

function mapStateToProps(state) {
    console.log(state.isAuthenticated);
    return { isAuthenticated: state.isAuthenticated }
}

export default connect(mapStateToProps, { logoutUser })(NavBar);