import React from 'react';
import './RegisterTemplate.css'

import {Header, Footer} from 'components'

const RegisterTemplate = ({register}) => {
    return (
        <div className='registerTemplate'>
            <Header/>
            <section className='registerT'>
                {register}
            </section>
            <Footer/>
        </div>
    );
};

export default RegisterTemplate;