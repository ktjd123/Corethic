import React, { Component } from 'react';
import {WriteTemplate, Info,Input, Content, Submit} from 'components'
import {getInfoRequest} from 'actions/auth'
import {postRequest} from 'actions/post'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'

class Write extends Component {

    state = {
        valid: true,
        title: '',
        titleC: 0,
        board: '',
        type: '호재',
        content: '',
        contentC: 0
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

    componentDidMount() {
        this.setState({
            board: this.props.match.params.board
        })
    }
    

    handleChange = (e) => {
        switch(e.target.name){
            case 'title':
            if(e.target.value.length > 15) return
            break

            case 'content':
            if(e.target.value.length > 300) return
            break

            default:
            return
        }
        const nextState = this.state
        nextState[e.target.name] = e.target.value
        nextState[e.target.name+'C'] = e.target.value.length
        this.setState(nextState)
    }

    handleToggle = e => {
        this.setState({
            type: e.target.value
        })
    }
    
    handlePost = () => {
        const {title, content, board, type} = this.state
        let typeToSend = true
        if(type === '호재'){
            typeToSend = true
        }else{
            typeToSend = false
        }
        if(title.length < 1){
            toast.error('제목을 입력해주세요')
            return
        }
        if(content.length < 1){
            toast.error('내용을 입력해주세요')
            return
        }
        this.props.postRequest(title, content, board, typeToSend).then(() => {
            if(this.props.post.status === "SUCCESS"){
                toast.success('등록했습니다')
                // todo push to board page
                this.props.history.push('/')
            }else{
                const errorMsg = [
                    '다시 시도해주세요',
                    '로그인해주세요'
                ]
                toast.error(errorMsg[this.props.post.error])
            }
        })
    }
    
    render() {
        const {valid, title, titleC, content, contentC, type, board} = this.state
        const {
            handleChange,
            handleToggle,
            handlePost
        } = this
        return (
            <div>
                <WriteTemplate
                    valid = {valid}
                    info = {<Info board={board}/>}
                    input = {<Input onChange={handleChange} title={title} count={titleC} onToggle={handleToggle} type={type} />}
                    content = {<Content onChange={handleChange} content={content} count={contentC} />}
                    submit = {<Submit board={board} onPost={handlePost} />}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        main: state.auth.main,
        post: state.post.post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInfoRequest: () => {
            return dispatch(getInfoRequest())
        },
        postRequest: (title, content, board, type) => {
            return dispatch(postRequest(title, content, board, type))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Write);