import React, { Component } from 'react';
import './Submit.css'
import {Link} from 'react-router-dom'
class Submit extends Component {
    render() {
        const {board} = this.props
        return (
            <div className='submit'>
                <a className='send'>등록</a>
                <Link to={'/'+board || '/'} className='cancel'>취소</Link>
                <Link to={'/'+board || '/404'} className='board'>목록</Link>
                <Link to='/' className='main'>메인</Link>
            </div>
        );
    }
}

export default Submit;