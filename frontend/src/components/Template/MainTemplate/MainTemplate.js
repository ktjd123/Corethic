import React from 'react';
import './MainTemplate.css'

import {Header, Footer} from 'components'

const MainTemplate = ({Entire, notice, newBoard}) => {
    return (
        <div className='mainTemplate'>
            <Header/>
            <section className='entireT'>
                {Entire}
            </section>
            <section className='entireT'>
                {notice}
            </section>
            <section className='entireT'>
                {newBoard}
            </section>
            <Footer/>
        </div>
    );
};

export default MainTemplate;