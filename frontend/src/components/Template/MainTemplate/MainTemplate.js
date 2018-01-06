import React from 'react';
import './MainTemplate.css'

import {Header, Footer} from 'components'

const MainTemplate = ({Entire, notice}) => {
    return (
        <div className='mainTemplate'>
            <Header/>
            <section className='entireT'>
                {Entire}
            </section>
            <section className='entireT'>
                {notice}
            </section>
            <Footer/>
        </div>
    );
};

export default MainTemplate;