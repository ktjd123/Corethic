import React from 'react';
import './LoginTemplate.css'

import {Header, Footer} from 'components'

const LoginTemplate = ({login}) => {
    return (
        <div className='loginTemplate'>
            <Header/>
            <section className='loginT'>
                {login}
            </section>
            <Footer/>
        </div>
    );
};

export default LoginTemplate;