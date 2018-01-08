import React, { Component } from 'react';
import {DetailTemplate, Info, DetailC} from 'components'
import {getDetailRequest} from 'actions/post'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'

class Detail extends Component {

    // todo get comment
    state = {
        post: Object
    }

    loop = undefined
    componentDidMount() {
        this.getDetail()
        this.loop = setInterval(this.getDetail, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.loop)
    }
    
    
    getDetail = () => {
        this.props.getDetailRequest(this.props.match.params.id).then(() => {
            if(this.props.detail.status==="SUCCESS"){
                this.setState({
                    post: this.props.detail.post
                })
            }else{
                const errorCode = [
                    '유효하지 않은 글입니다',
                    '없는 글입니다'
                ]
                toast.error(errorCode[this.props.detail.error])
                this.props.history.push('/')
            }
        })
    }

    render() {
        const {board} = this.props.match.params
        return (
            <div>
                <DetailTemplate
                    info={<Info board={board}/>}
                    detail={<DetailC post={this.state.post}/>}
                />
            </div>
        );
    }
}

const mapStateToPros = state => {
    return {
        detail: state.post.detail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDetailRequest: (id) => {
            return dispatch(getDetailRequest(id))
        }
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Detail);