import React, { Component } from 'react';
import {WriteTemplate, Input, Content} from 'components'
import {getInfoRequest} from 'actions/auth'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'

class Write extends Component {

    state = {
        valid: true
    }

    componentWillMount() {
        this.props.getInfoRequest().then(() => {
            if(!this.props.main.valid){
                this.setState({
                    valid: false
                })
                toast.error('로그인해주세요')
                this.props.history.push('/login')
            }else{
                this.setState({
                    valid: true
                })
            }
        })        
    }
    
    
    render() {
        const {valid} = this.state
        return (
            <div>
                <WriteTemplate
                    valid = {valid}
                    input = {<Input/>}
                    content = {<Content/>}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        main: state.auth.main
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInfoRequest: () => {
            return dispatch(getInfoRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Write);