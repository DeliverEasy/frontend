import React, { Component } from 'react';
import './styles.scss';

class PostDisplayer extends Component {

    render() {
        return (
            <div className='post-displayer' onClick={() => console.log(this.props.title)}>
                <div className='post-displayer-image'></div>
                <section className='post-displayer-text-container'>
                    <h4>
                        {this.props.title}
                    </h4>
                </section>
            </div>
        );
    }
}

export default PostDisplayer;