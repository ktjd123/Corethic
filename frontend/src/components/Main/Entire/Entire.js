import React, { Component } from 'react';
import './Entire.css'

import { Post } from 'components'
import {Link} from 'react-router-dom'

class Entire extends Component {
    render() {
        const { title, posts, to } = this.props
        // todo change key to _id
        // apply time ago
        const postsR = posts.map((post,i) => {
            return (
                <Post
                    to={post._id}
                    title={post.title}
                    time={post.date}
                    writer={post.writer}
                    views={post.views}
                    good={post.type}
                    key={i}
                />
            )
        })
        let write = (
            <Link to={'/write'+to} className='write'>글쓰기</Link>
        )
        const entireRegex = /(entire)/
        if(entireRegex.test(to)){
            write = (<div className='write'></div>)
        }
        return (
            <div className='entire'>
                <div className='info'>
                    <Link to={'/board'+to} className='board'>더보기</Link>
                    <div className='title'>{title}</div>
                    {write}
                </div>
                <div className='main'>
                    {postsR}
                </div>
            </div>
        );
    }
}

export default Entire;