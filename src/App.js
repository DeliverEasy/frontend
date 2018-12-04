import React, { Component } from 'react';
import { connect } from "react-redux";
import { verifyToken } from './actions';
import NavBar from './components/NavBar';

class App extends Component {

    componentDidMount() {
        this.props.verifyToken(localStorage.token)
    }

    render() {
        return (
            <div>
                <NavBar />
            </div>
        );
    }
}

export default connect(null, {verifyToken})(App);
