import React, { Component } from 'react';
import {LoginTemplate, LoginC} from 'components'
import {loginRequest, getInfoRequest} from 'actions/auth'
import {connect} from 'react-redux'
import { toast } from 'react-toastify';
class Login extends Component {

    state = {
        id: '',
        pw: ''
    }

    componentWillMount() {
        this.props.getInfoRequest().then(() => {
            if(this.props.main.valid){
                this.props.history.push('/')
            }
        })
    }
    

    handleChange = e => {
        const nextState = this.state
        nextState[e.target.className] = e.target.value
        this.setState(nextState)
    }

    handleLogin = () => {
        const {id, pw} = this.state
        if(id < 3 || id > 10){
            toast.error('아이디는 3에서 10자리 입니다')
            return
        }
        if(pw < 6 || pw > 20){
            toast.error('비밀번호는 6에서 20자리 입니다.')
            return
        }
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

    handleEnter = (e) => {
        if(e.charCode === 13){
            this.handleLogin()
        }
    }

    render() {
        const {
            handleChange,
            handleLogin,
            handleEnter
        } = this
        return (
            <div>
                <LoginTemplate 
                login={<LoginC {...this.state} onChange={handleChange} onLogin={handleLogin} onEnter={handleEnter} />}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        login: state.auth.login ,
        main: state.auth.main
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id,pw))
        },
        getInfoRequest: () => {
            return dispatch(getInfoRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);