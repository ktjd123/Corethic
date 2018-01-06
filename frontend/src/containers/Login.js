import React, { Component } from 'react';
import {LoginTemplate, LoginC} from 'components'
import {loginRequest} from 'actions/auth'
import {connect} from 'react-redux'
import { toast } from 'react-toastify';
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

    handleLogin = () => {
        const {id, pw} = this.state
        this.props.loginRequest(id,pw).then(() => {
            if(this.props.login.status==="SUCCESS"){
                toast.success('로그인했습니다')
                this.props.history.push('/')
            }else{
                const errorList = [
                    '다시 시도해주세요',
                    '아이디가 맞지 않습니다',
                    '비밀번호가 맞지 않습니다'
                ]
                toast.error(errorList[this.props.login.error])
            }
        })
    }

    render() {
        const {id, pw} = this.state
        const {
            handleChange,
            handleLogin
        } = this
        return (
            <div>
                <LoginTemplate 
                login={<LoginC id={id} pw={pw} onChange={handleChange} onLogin={handleLogin}/>}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        login: state.auth.login 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id,pw))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);