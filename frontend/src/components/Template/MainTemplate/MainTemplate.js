import React from 'react';
import './MainTemplate.css'

import {Header, Footer} from 'components'

const MainTemplate = ({valid, Entire, free, btc, xrp, eth, bth, ltc, dash, newBoard}) => {
    return (
        <div className='mainTemplate'>
            <Header valid={valid}/>
            <section className='entireT'>
                {Entire}
            </section>
            <section className='entireT'>
                {free}
            </section>
            <section className='entireT'>
                {btc}
            </section>
            <section className='entireT'>
                {xrp}
            </section>
            <section className='entireT'>
                {eth}
            </section>
            <section className='entireT'>
                {bth}
            </section>
            <section className='entireT'>
                {ltc}
            </section>
            <section className='entireT'>
                {dash}
            </section>
            <section className='entireT'>
                {newBoard}
            </section>
            <Footer/>
        </div>
    );
};

export default MainTemplate;