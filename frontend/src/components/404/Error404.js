import React, { Component } from 'react';
import { Header, Footer } from 'components'
import './Error404.css'

class Error404 extends Component {
    render() {
        return (
            <div className='error404'>
                <Header />
                <h1>없는 페이지입니다.</h1>
                <p>상단의 스레딕을 눌러 돌아가세요</p>
                <Footer/>
            </div>
        );
    }
}

export default Error404;