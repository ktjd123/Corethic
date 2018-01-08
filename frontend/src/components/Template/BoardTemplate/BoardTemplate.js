import React from 'react';
import './BoardTemplate.css'
import { Header, Footer } from 'components'

const BoardTemplate = ({valid, info }) => {
    return (
        <div className='boardTemplate' >
            <Header valid={valid} />
            <section className='infoT'>
                {info}
            </section>
            <Footer />
        </div>
    );
};

export default BoardTemplate;