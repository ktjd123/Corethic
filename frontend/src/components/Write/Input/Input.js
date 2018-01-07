import React, { Component } from 'react';
import './Input.css'

class Type extends Component {
    render() {
        return (
            <select>
                <option value='호재'>호재</option>
                <option value='악재'>악재</option>
            </select>
        )
    }
}

class Input extends Component {
    render() {
        return (
            <div className='input'>
                <div className='inputBox'>
                    <input className='title' placeholder='제목을 입력해주세요' />
                    <div className='count'>0/15</div>
                </div>
                <Type/>
            </div>
        );
    }
}

export default Input;