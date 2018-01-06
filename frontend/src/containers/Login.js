import React, { Component } from 'react';
import {LoginTemplate, LoginC} from 'components'

class Login extends Component {
    render() {
        return (
            <div>
                <LoginTemplate login={<LoginC/>}/>
            </div>
        );
    }
}

export default Login;