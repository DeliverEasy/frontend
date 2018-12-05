import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../../actions';
import './styles.scss';

import SearchBar from './components/SearchBar';
import PostDisplayer from './components/PostDisplayer';

class SearchPosts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if (this.props.posts) {
            return (
                <div>
                    <SearchBar />
                    <div>
                        {this.props.posts.map(post => <PostDisplayer />)}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <SearchBar />
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(SearchPosts);