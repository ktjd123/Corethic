import React, { Component } from 'react';
import './Comment.css'
import TimeAgo from 'react-timeago'
import koreanString from 'react-timeago/lib/language-strings/ko'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

class Comment extends Component {
    render() {
        const {writer, content, date} = this.props
        const loading = '로딩중...'
        const formatter = buildFormatter(koreanString)
        return (
            <div className='commentC'>
                <div className='contentC'>
                    {content || loading}
                </div>
                <div className='info'>
                    <div className='writer'>
                        {writer || loading}
                    </div>
                    <div className='date'>
                        {<TimeAgo date={date} formatter={formatter} /> || loading}
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;