import React, { Component } from 'react';
import TimeAgo from 'react-timeago'
import koreanString from 'react-timeago/lib/language-strings/ko'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import './Post.css'

import {Link} from 'react-router-dom'

class Post extends Component {
    render() {
        const {to, title,board, time, writer, views, good} = this.props
        const loading = '로딩중...'
        const formatter = buildFormatter(koreanString)
        return (
            <Link to={'/detail/'+board+'/'+to || '/404'} className={`post ${good ? 'good' : 'bad'}`}>
                <div className='info'>
                    <div className='title'>
                        {title || loading}
                    </div>
                    <div className='time'>
                        {<TimeAgo date={time} formatter={formatter} /> || loading}
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