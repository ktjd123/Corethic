import React, { Component } from 'react';
import './Login.css'

import {Link} from 'react-router-dom'

class Login extends Component {
    render() {
        const {id, pw, onChange, onLogin, onEnter} = this.props
        return (
            <div className='login'>
                <div className='holder'>
                <i className='material-icons'>person</i>
                    <input placeholder='아이디' className='id' value={id} onChange={onChange} onKeyPress={onEnter}/>
                </div>
                <div className='holder'>
                <i className='material-icons'>vpn_key</i>
                    <input type='password' placeholder='비밀번호' className='pw' value={pw} onChange={onChange} onKeyPress={onEnter}/>
                </div>
                <div className='loginCon'>
                    <a className='loginB' onClick={onLogin} >로그인</a>
                    <Link to='/register' className='registerB'>회원가입</Link>
                </div>
            </div>
        );
    }
}

export default Login;