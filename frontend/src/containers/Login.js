import React, { Component } from 'react';
import {LoginTemplate, LoginC} from 'components'
class Login extends Component {

    state = {
        id: '',
        pw: ''
    }

    handleChange = e => {
        const nextState = this.state
        nextState[e.target.className] = e.target.value
        this.setState(nextState)
    }

    render() {
        const {id, pw} = this.state
        const {
            handleChange
        } = this
        return (
            <div>
                <LoginTemplate 
                login={<LoginC id={id} pw={pw} onChange={handleChange}/>}
                />
            </div>
        );
    }
}

export default Login;