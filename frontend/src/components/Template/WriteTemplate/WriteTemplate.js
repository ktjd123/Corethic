import React from 'react';
import './WriteTemplate.css'
import {Header, Footer} from 'components'

const WriteTemplate = ({valid, input, content}) => {
    return (
        <div className='writeTemplate'>
            <Header valid = {valid}/>
                <section className='inputT'>
                    {input}
                </section>
                <section className='contentT'>
                    {content}
                </section>
            <Footer/>
        </div>
    );
};

export default WriteTemplate;