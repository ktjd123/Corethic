import React, { Component } from 'react';
import {WriteTemplate} from 'components'
import {getInfoRequest} from 'actions/auth'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'

class Write extends Component {

    componentWillMount() {
        this.props.getInfoRequest().then(() => {
            if(!this.props.main.valid){
                toast.error('로그인해주세요')
                this.props.history.push('/login')
            }
        })        
    }
    
    
    render() {
        return (
            <div>
                <WriteTemplate/>
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