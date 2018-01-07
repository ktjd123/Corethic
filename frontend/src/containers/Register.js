import React, { Component } from 'react';
import {RegisterTemplate, RegisterC} from  'components'
import {registerRequest, getInfoRequest} from 'actions/auth'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'

class Register extends Component {
    state = {
        id: '',
        pw: '',
        name: '',
        email: ''
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

    handleRegister = () => {
        const {id, pw, email, name} = this.state
        this.props.registerRequest(id,pw,email,name).then(() => {
            if(this.props.register.status === "SUCCESS"){
                toast.success('가입을 축하드립니다!')
                this.props.history.push('/login')
            }else{
                const errorMessage = [
                    '다시 시도해주세요',
                    '이미 있는 아이디입니다',
                    '이미 있는 이메일입니다',
                    '이미 있는 닉네임입니다'
                ]
                toast.error(errorMessage[this.props.register.error])
            }
        })
    }


    render() {
        const {id, pw, name, email} = this.state
        const {
            handleChange,
            handleRegister
        } = this
        return (
            <div>
                <RegisterTemplate 
                register={<RegisterC id={id} pw={pw} name={name} email={email} onChange={handleChange} onRegister={handleRegister}/>}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        register: state.auth.register,
        main: state.auth.main
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerRequest: (id, pw, email, name) => {
            return dispatch(registerRequest(id, pw, email, name))
        },
        getInfoRequest: () => {
            return dispatch(getInfoRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);