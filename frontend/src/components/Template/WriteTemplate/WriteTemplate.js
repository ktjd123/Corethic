import React from 'react';
import './WriteTemplate.css'
import { Header, Footer } from 'components'

const WriteTemplate = ({ valid, info, input, content, submit }) => {
    return (
        <div className='writeTemplate'>
            <Header valid={valid} />
            <section className='infoT'>
                {info}
            </section>
            <section className='inputT'>
                {input}
            </section>
            <section className='contentT'>
                {content}
            </section>
            <section className='submitT'>
                {submit}
            </section>
            <Footer />
        </div>
    );
};

export default WriteTemplate;