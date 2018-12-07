import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router'

import LoginForm from '../../components/LoginForm';
import SearchPosts from '../SearchPosts';

const MainRouter = (props) => (
    <Router>
        <div>
            <Route exact path="/" render={() => (
                props.isAuthenticated ? (<Redirect to="/home" />) : (<Redirect to="/login" />))} />
            <Route path="/home" component={SearchPosts} />
            <Route path="/login" component={LoginForm} />
        </div>
    </Router>
);

export default MainRouter;