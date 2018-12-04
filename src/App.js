import React, { Component } from 'react';
import { connect } from "react-redux";
import { verifyToken } from './actions';
import './styles.scss';

import NavBar from './components/NavBar';
import SearchPosts from './scenes/SearchPosts';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentDidMount() {
        this.props.verifyToken(localStorage.token);
    }

    render() {
        if (this.props.isAuthenticated) {
            return (
                <div>
                    <NavBar />
                    <div className="scene-container">
                        <SearchPosts />
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <NavBar />
                    <div className="scene-container">
                        <LoginForm />
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return { isAuthenticated: state.isAuthenticated }
}

export default connect(mapStateToProps, { verifyToken })(App);
