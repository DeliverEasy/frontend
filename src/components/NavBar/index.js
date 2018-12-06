import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import './styles.scss';

class NavBar extends Component {

    render() {
        if (this.props.isAuthenticated) {
            return (
                <div className='nav-bar'>
                    <div className='nav-bar-navigation-button-container'>
                        <button className='nav-bar-button active'><i className="icon material-icons">search</i></button>
                        <button className='nav-bar-button'><i className="icon material-icons">home</i></button>
                    </div>
                    <div className='nav-bar-account-button-container'>
                        <button className='nav-bar-button' onClick={e => this.props.logoutUser()}><i className="icon material-icons">power_settings_new</i></button>
                    </div>
                </div>);
        } else {
            return (<div className='nav-bar'></div>);
        }
    }
}

function mapStateToProps(state) {
    return { isAuthenticated: state.isAuthenticated }
}

export default connect(mapStateToProps, { logoutUser })(NavBar);