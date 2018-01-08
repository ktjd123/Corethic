import React, { Component } from 'react';
import './Submit.css'
import {Link} from 'react-router-dom'
class Submit extends Component {
    render() {
        const {board, onPost} = this.props
        return (
            <div className='submit'>
                <a className='send' onClick={onPost}>등록</a>
                <Link to='/' className='cancel'>취소</Link>
                <Link to={'/board/'+board || '/404'} className='board'>목록</Link>
            </div>
        );
    }
}

export default Submit;