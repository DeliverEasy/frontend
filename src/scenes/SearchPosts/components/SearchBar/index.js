import React, { Component } from 'react';
import './styles.scss';

class SearchBar extends Component {
    render() {
        return (
            <input className='search_bar' onChange={this.props.onChange}></input>
        );
    }
}

export default SearchBar;