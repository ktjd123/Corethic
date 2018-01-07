import React, { Component } from 'react';
import './Input.css'

class Input extends Component {
    render() {
        return (
            <div className='input'>
                <input className='title' placeholder='제목을 입력해주세요'/>
                <div className='count'>0/15</div>
            </div>
        );
    }
}

export default Input;