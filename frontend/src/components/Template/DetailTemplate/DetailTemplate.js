import React from 'react';
import './DetailTemplate.css'
import { Header, Footer } from 'components'

const DetailTemplate = ({ info, detail }) => {
    return (
        <div className='detailTemplate' >
            <Header />
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
