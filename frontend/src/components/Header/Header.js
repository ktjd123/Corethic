import React, { Component } from 'react';
import './Header.css'

import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='left'>

                </div>
                <Link to='/' className="logo">스레딕</Link>
                <div className='right'>
                    <Link to='/login'>로그인</Link>
                </div>
            </div>
        );
    }
}

export default Header;