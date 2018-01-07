import React from 'react';
import './WriteTemplate.css'
import {Header, Footer, WriteC} from 'components'

const WriteTemplate = () => {
    return (
        <div className='writeTemplate'>
            <Header/>
                <section className='writeT'>
                    <WriteC/>
                </section>
            <Footer/>
        </div>
    );
};

export default WriteTemplate;