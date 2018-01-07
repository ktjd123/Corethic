import React, { Component } from 'react';
import './Content.css'

class Content extends Component {
    render() {
        return (
            <div className='content'>
                <textarea placeholder='내용을 입력해주세요' autoComplete='off' >
                </textarea>
                <div className='count'>0/300</div>
            </div>
        );
    }
}

export default Content;