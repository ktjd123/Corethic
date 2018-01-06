import React, { Component } from 'react';
import './Register.css'
import { Link } from 'react-router-dom'

class Register extends Component {
    render() {
        return (
            <div className='register'>
                <div className='holder'>
                    <i className='material-icons'>person</i>
                    <input placeholder='아이디' />
                </div>
                <div className='holder'>
                    <i className='material-icons'>vpn_key</i>
                    <input type='password' placeholder='패스워드' />
                </div>
                <div className='holder'>
                    <i className='material-icons'>email</i>
                    <input type='email' placeholder='이메일'/>
                </div>
                <div className='holder'>
                    <i className='material-icons'>account_circle</i>
                    <input type='phone' placeholder='닉네임'/>
                </div>
                <div className='registerCon'>
                    <a className='registerB'>회원가입</a>
                    <Link to='/login' className='cancelB'>취소</Link>
                </div>
            </div>
        );
    }
}

export default Register;