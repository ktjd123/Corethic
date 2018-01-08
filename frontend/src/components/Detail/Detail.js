import React, { Component } from 'react';
import './Detail.css'
import TimeAgo from 'react-timeago'
import koreanString from 'react-timeago/lib/language-strings/ko'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

class Detail extends Component {
    render() {
        const { post } = this.props
        const loading = '로딩중...'
        const formatter = buildFormatter(koreanString)
        return (
            <div className='detail'>
                <div className='info'>
                    <div className='title'>{post.title || loading}</div>
                    <div className='writer'>{post.writer || loading}</div>
                </div>
                <div className='content'>
                    {post.content || loading}
                </div>
                <div className='bottomInfo'>
                    <div className='view'>
                        영향력: {typeof post.views !== 'undefined' ? post.views : loading} 원
                    </div>
                    <div className='time'>
                        {typeof post.date !== 'undefined' ? <TimeAgo date={post.date} formatter={formatter} /> : loading}
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;