import React, { Component } from 'react';
import './Input.css'

class Type extends Component {
    render() {
        const {onToggle, type} = this.props
        return (
            <select value={type} onChange={onToggle}>
                <option value='호재'>호재</option>
                <option value='악재'>악재</option>
            </select>
        )
    }
}

class Input extends Component {
    render() {
        const {onChange, title, count, onToggle, type} = this.props
        return (
            <div className='input'>
                <div className='inputBox'>
                    <input className='title' name='title' placeholder='제목을 입력해주세요' autoComplete='off' onChange={onChange} value={title} />
                    <div className='count'>{count}/20</div>
                </div>
                <Type onToggle={onToggle} type={type} />
            </div>
        );
    }
}

export default Input;