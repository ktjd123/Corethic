import React, { Component } from 'react';
import './Entire.css'

import {Post} from 'components'

class Entire extends Component {
    render() {
        const {title, posts} = this.props
        const postsR = posts.map((post, i) => {
            return(
                <Post
                    title={post.title}
                    time={post.time}
                    writer={post.writer}
                    views={post.views}
                    key={i}
                />
            )
        })
        return (
            <div className='entire'>
                <div className='title'>{title}</div>
                <div className='main'>
                    {postsR}
                </div>
            </div>
        );
    }
}

export default Entire;