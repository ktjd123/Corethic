import React, { Component } from 'react';
import {DetailTemplate, Info, DetailC} from 'components'
import {getInfoRequest} from 'actions/auth'
import {getDetailRequest} from 'actions/post'
import {commentRequest, getCommentRequest} from 'actions/comment'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'

class Detail extends Component {

    state = {
        valid: true,
        post: Object,
        commentInput: '',
        commentCount: 0,
        comments: []
    }

    loop = undefined
    componentDidMount() {
        this.getDetail()
        this.loop = setInterval(this.getDetail, 3000)
        
        this.props.getInfoRequest().then(() => {
            this.setState({
                valid: this.props.main.valid
            })
        })
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
        this.props.getCommentRequest(this.props.match.params.id).then(() => {
            if(this.props.comment.get.status === "SUCCESS"){
                this.setState({
                    comments: this.props.comment.get.comments
                })
            }
        })
    }

    handleEnter = (e) => {
        if(e.charCode === 13){
            this.handleComment()
        }
    }

    handleChange = e => {
        if(e.target.value.length > 30){
            return
        }
        this.setState({
            commentInput: e.target.value,
            commentCount: e.target.value.length
        })
    }

    handleComment = () => {
        const {commentInput} = this.state
        if(commentInput < 1){
            toast.error('댓글을 입력해주세요')
        }
        this.props.commentRequest(this.props.match.params.id, commentInput).then(() => {
            if(this.props.comment.add.status === "SUCCESS"){
                toast.success('댓글을 입력했습니다!')
                this.setState({
                    commentInput: '',
                    commentCount: 0
                })
                this.getDetail()
            }else{
                const errorMsg = [
                    '입력값을 확인해주세요',
                    '로그인 후에 댓글을 달 수 있습니다',
                    '없는 글입니다'
                ]
                toast.error(errorMsg[this.props.comment.add.error])
                if(this.props.comment.add.error === 1){
                    this.props.history.push('/login')
                }
                if(this.props.comment.add.error === 2){
                    this.props.history.push('/')
                }
                return
            }
        })
    }

    render() {
        const {
            handleChange,
            handleComment,
            handleEnter
        } = this
        const {board} = this.props.match.params
        return (
            <div>
                <DetailTemplate
                    valid={this.state.valid}
                    info={<Info board={board}/>}
                    detail={<DetailC post={this.state.post} {...this.state} onChange={handleChange} onComment={handleComment} onEnter={handleEnter} />}
                />
            </div>
        );
    }
}

const mapStateToPros = state => {
    return {
        detail: state.post.detail,
        comment: state.comment,
        main: state.auth.main
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDetailRequest: (id) => {
            return dispatch(getDetailRequest(id))
        },
        commentRequest: (id, content) => {
            return dispatch(commentRequest(id, content))
        },
        getInfoRequest: () => {
            return dispatch(getInfoRequest())
        },
        getCommentRequest: (id) => {
            return dispatch(getCommentRequest(id))
        }
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Detail);