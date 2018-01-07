import React from 'react';
import './DetailTemplate.css'
import { Header, Footer } from 'components'

const DetailTemplate = ({ info }) => {
    return (
        <div className='detailTemplate' >
            <Header />
            <section className='infoT'>
                {info}
            </section>
            <Footer />
        </div>
    );
};

export default DetailTemplate;
