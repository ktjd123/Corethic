import React, { Component } from 'react';
import './Header.css'

import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to='/' className="logo">쓰레딕</Link>
            </div>
        );
    }
}

export default Header;