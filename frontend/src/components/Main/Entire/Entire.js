import React, { Component } from 'react';
import './Entire.css'

import { Post } from 'components'
import {Link} from 'react-router-dom'

class Entire extends Component {
    render() {
        const { title, posts } = this.props
        const postsR = posts.map((post, i) => {
            return (
                <Post
                    to={post.to}
                    title={post.title}
                    time={post.time}
                    writer={post.writer}
                    views={post.views}
                    good={post.good}
                    key={i}
                />
            )
        })
        return (
            <div className='entire'>
                <div className='info'>
                    <div className='title'>{title}</div>
                    <Link to='/write' className='write'>글쓰기</Link>
                </div>
                <div className='main'>
                    {postsR}
                </div>
            </div>
        );
    }
}

export default Entire;