import React from 'react';
import './MainTemplate.css'

import {Header} from 'components'

const MainTemplate = () => {
    return (
        <div className='mainTemplate'>
            <Header/>
            <section className='app'>
            </section>
        </div>
    );
};

export default MainTemplate;