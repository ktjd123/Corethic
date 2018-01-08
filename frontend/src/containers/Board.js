import React, { Component } from 'react';
import { BoardTemplate, Info, BoardList, BoardButtons } from 'components'
import { connect } from 'react-redux'
import { getInfoRequest } from 'actions/auth'
import {getByTimeRequest} from 'actions/post'

class Board extends Component {

    state = {
        valid: true,
        posts: []
    }
    loop = undefined
    componentDidMount() {
        this.props.getInfoRequest().then(() => {
            if (this.props.main.valid) {
                this.setState({
                    valid: true
                })
            } else {
                this.setState({
                    valid: false
                })
            }
        })
        this.getPost()
        this.loop = setInterval(this.getPost, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.loop)
    }
    
    getPost = () => {
        this.props.getByTimeRequest(this.props.match.params.board, 30).then(() =>{
            if(this.props.post.status === "SUCCESS"){
                this.setState({
                    posts: this.props.post.posts
                })
            }
        })
    }

    render() {
        const { valid, posts } = this.state
        const { board } = this.props.match.params
        return (
            <div>
                <BoardTemplate
                    valid={valid}
                    info={<Info board={board} />}
                    boardList={<BoardList posts = {posts}/>}
                    boardButtons={<BoardButtons board={this.props.match.params.board}/>}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        main: state.auth.main,
        post: state.post.getTime
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInfoRequest: () => {
            return dispatch(getInfoRequest())
        },
        getByTimeRequest: (board, limit) => {
            return dispatch(getByTimeRequest(board, limit))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);