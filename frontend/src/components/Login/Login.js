import React, { Component } from 'react';
import './Login.css'

import {Link} from 'react-router-dom'

class Login extends Component {
    render() {
        const {id, pw, onChange} = this.props
        return (
            <div className='login'>
                <div className='holder'>
                <i className='material-icons'>person</i>
                    <input placeholder='아이디' className='id' value={id} onChange={onChange}/>
                </div>
                <div className='holder'>
                <i className='material-icons'>vpn_key</i>
                    <input type='password' placeholder='패스워드' className='pw' value={pw} onChange={onChange}/>
                </div>
                <div className='loginCon'>
                    <a className='loginB'>로그인</a>
                    <Link to='/register' className='registerB'>회원가입</Link>
                </div>
            </div>
        );
    }
}

export default Login;