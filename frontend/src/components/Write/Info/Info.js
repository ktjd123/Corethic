import React, { Component } from 'react';
import './Info.css'

import {Link} from 'react-router-dom'

class Info extends Component {
    render() {
        const {board} = this.props
        let boardToShow = ''
        switch(board){

            case 'all':
            boardToShow='전체 - hot'
            break

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
        // todo make div to link to board
        return (
            <Link to={'/board/'+board} className='infoC'>
                {boardToShow}
            </Link>
        );
    }
}

export default Info;