import React, { Component } from 'react';
import './Content.css'

class Content extends Component {
    render() {
        const {content, onChange, count} = this.props
        return (
            <div className='content'>
                <textarea placeholder='내용을 입력해주세요' autoComplete='off' name='content' value={content} onChange={onChange} >
                </textarea>
                <div className='count'>{count}/300</div>
            </div>
        );
    }
}

export default Content;