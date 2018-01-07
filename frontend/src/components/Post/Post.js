import React, { Component } from 'react';
import './Post.css'

import {Link} from 'react-router-dom'

class Post extends Component {
    render() {
        const {to, title, time, writer, views, good} = this.props
        const loading = '로딩중...'
        return (
            <Link to={to || '/404'} className={`post ${good ? 'good' : 'bad'}`}>
                <div className='info'>
                    <div className='title'>
                        {title || loading}
                    </div>
                    <div className='time'>
                        {time || loading}
                    </div>
                </div>
                <div className='info2'>
                    <div className='writer'>{writer || loading}</div>
                    <div className='views'>조회수: {typeof views !== 'undefined' ? views : loading}</div>
                </div>
            </Link>
        );
    }
}

export default Post;