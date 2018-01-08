import React from 'react';
import './DetailTemplate.css'
import { Header, Footer } from 'components'

const DetailTemplate = ({valid, info, detail }) => {
    return (
        <div className='detailTemplate' >
            <Header valid={valid} />
            <section className='infoT'>
                {info}
            </section>
            <section className='detailT'>
                {detail}
            </section>
            <Footer />
        </div>
    );
};

export default DetailTemplate;
