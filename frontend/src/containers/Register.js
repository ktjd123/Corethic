import React, { Component } from 'react';
import {RegisterTemplate, RegisterC} from  'components'

class Register extends Component {
    state = {
        id: '',
        pw: '',
        name: '',
        email: ''
    }
    render() {
        return (
            <div>
                <RegisterTemplate 
                register={<RegisterC/>}
                />
            </div>
        );
    }
}

export default Register;