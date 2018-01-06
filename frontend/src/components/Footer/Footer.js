import React, { Component } from 'react';
import './Footer.css'

import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='info'>
                    <Link to='/'>이용약관</Link>
                    <Link to='/'>개인정보취급방침</Link>
                </div>
                <div className='copyright'>
                    모든 권리는 코레딕에게 있습니다.
                </div>
            </div>
        );
    }
}

export default Footer;