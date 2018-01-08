import React from 'react';
import './BoardTemplate.css'
import { Header, Footer } from 'components'

const BoardTemplate = ({valid, info, boardList, boardButtons }) => {
    return (
        <div className='boardTemplate' >
            <Header valid={valid} />
            <section className='infoT'>
                {info}
            </section>
            <section className='buttonT'>
                {boardButtons}
            </section>
            <section className='boardListT'>
                {boardList}
            </section>
            <Footer />
        </div>
    );
};

export default BoardTemplate;