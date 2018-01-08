import React, { Component } from 'react';
import './BoardButtons.css'
import {Link} from 'react-router-dom'

class BoardButtons extends Component {
    render() {
        const {board} = this.props
        return (
            <div className='boardButtons'>
                <Link to={'/write/'+board}>글쓰기</Link>
            </div>
        );
    }
}

export default BoardButtons;