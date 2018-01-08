import React, { Component } from 'react';
import TimeAgo from 'react-timeago'
import koreanString from 'react-timeago/lib/language-strings/ko'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import './Post.css'

import {Link} from 'react-router-dom'

class Post extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props === nextProps){
            return false
        }
        return true
    }
    
    render() {
        const {to, title,board, time, writer, views, good} = this.props
        const loading = '로딩중...'
        const formatter = buildFormatter(koreanString)
        let boardToShow = ''
        switch(board){
            case "free":
            boardToShow='자유게시판'
            break

            case 'btc':
            boardToShow='비트코인'
            break
            
            case 'xrp':
            boardToShow='리플'
            break

            case 'eth':
            boardToShow='이더리움'
            break

            case 'bth':
            boardToShow='비트코인캐시'
            break

            case 'ltc':
            boardToShow='라이트코인'
            break

            case 'dash':
            boardToShow='대시'
            break

            case 'newBoard':
            boardToShow='새 게시판 요청'
            break
            
            default:
            boardToShow='오류'
            break
        }
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
                    <div className='views'>영향력: {typeof views !== 'undefined' ? views : loading}원</div>
                    <div className='board'>{boardToShow}</div>
                </div>
            </Link>
        );
    }
}

export default Post;