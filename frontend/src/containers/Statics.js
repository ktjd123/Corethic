import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getStaticsRequest} from 'actions/statics'
import {toast} from 'react-toastify'

class Statics extends Component {

    state ={
        count: 0
    }
    
    componentDidMount() {
        this.getStatic()
    }
    
    getStatic(){
        this.props.getStaticsRequest().then(() => {
            if(this.props.get.status === "SUCCESS"){
                this.setState({
                    count: this.props.get.count
                })
            }else{
                toast.error('기록되었습니다')
                this.props.history.push('/')
            }
        })
    }
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                실시간: {this.state.count}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        get: state.statics.get
    }
}

const mapDispatchToPros = dispatch => {
    return{
        getStaticsRequest: () => {
            return dispatch(getStaticsRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(Statics);