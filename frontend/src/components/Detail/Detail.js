import React, { Component } from 'react';
import './Detail.css'
import TimeAgo from 'react-timeago'
import koreanString from 'react-timeago/lib/language-strings/ko'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import { Link } from 'react-router-dom'

class Detail extends Component {
    render() {
        const { post , commentInput, onChange, commentCount, onComment} = this.props
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
                <div className='buttons'>
                    <Link to={'/board/' + post.board} className='board'>목록</Link>
                    <Link to='/' className='main' >메인</Link>
                </div>
                <div className='commentDes'>댓글</div>
                <div className='comment'>
                    <div className='input'>
                        <div className='inputBox'>
                            <input value={commentInput} onChange={onChange} placeholder='댓글을 입력해주세요' />
                            <div className='count'>{commentCount}/30</div>
                        </div>
                        <a onClick={onComment} >달기</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;