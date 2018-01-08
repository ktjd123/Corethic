import React, { Component } from 'react';
import './Header.css'

import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
        const {valid} = this.props
        let login = (
            <Link to='/login'>로그인</Link>
        )
        const loginRegex = /(login|register)/
        if(loginRegex.test(window.location.href)){
            login = undefined
        }
        if(valid){
            login = (
                // <a><i className='material-icons'>person</i></a>
                undefined
            )
        }
        return (
            <div className='header'>
                <div className='left'>
                </div>
                <Link to='/' className="logo">코레딕</Link>
                <div className='right'>
                    {login}
                </div>
            </div>
        );
    }
}

export default Header;