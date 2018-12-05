import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../../actions';
import './styles.scss';

import SearchBar from './components/SearchBar';
import PostDisplayer from './components/PostDisplayer';

class SearchPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regex: ''
        };
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    handle_search = e => {
        const value = e.target.value;
        this.setState({regex: value});
    };

    render() {
        if (this.props.posts) {
            const posts = this.props.posts.filter(({title}) => title.match(new RegExp(this.state.regex))).map(post => <PostDisplayer title={post.title} />);
            return (
                <div>
                    <SearchBar onChange={this.handle_search}/>
                    <div className='post-container'>
                        {posts}
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