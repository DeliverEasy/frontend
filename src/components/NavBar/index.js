import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import './styles.scss';

class NavBar extends Component {

    render() {
        if (this.props.isAuthenticated) {
            return (
                <div className='nav-bar'>
                    <button onClick={e => this.props.logoutUser()}>LO</button>
                </div>);
        } else {
            return (<div className='nav-bar'>Not Authenticated</div>);
        }
    }
}

function mapStateToProps(state) {
    return { isAuthenticated: state.isAuthenticated }
}

export default connect(mapStateToProps, { logoutUser })(NavBar);