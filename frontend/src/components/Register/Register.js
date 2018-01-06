import React, { Component } from 'react';
import './Register.css'
import { Link } from 'react-router-dom'

class Register extends Component {
    render() {
        const {id, pw, name, email, onChange, onRegister} = this.props
        return (
            <div className='register'>
                <div className='holder'>
                    <i className='material-icons'>person</i>
                    <input placeholder='아이디' className='id' value={id} onChange={onChange}/>
                </div>
                <div className='holder'>
                    <i className='material-icons'>vpn_key</i>
                    <input type='password' placeholder='비밀번호'  className='pw' value={pw} onChange={onChange} />
                </div>
                <div className='holder'>
                    <i className='material-icons'>email</i>
                    <input type='email' placeholder='이메일' className='email' value={email} onChange={onChange} />
                </div>
                <div className='holder'>
                    <i className='material-icons'>account_circle</i>
                    <input type='phone' placeholder='닉네임' className='name' value={name} onChange={onChange} />
                </div>
                <div className='registerCon'>
                    <a className='registerB' onClick={onRegister}>회원가입</a>
                    <Link to='/login' className='cancelB'>취소</Link>
                </div>
            </div>
        );
    }
}

export default Register;