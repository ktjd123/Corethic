import React, { Component } from 'react';
import {MainTemplate, Entire} from 'components'
import {getInfoRequest} from 'actions/auth'
import {getPostRequest} from 'actions/post'
import {connect} from 'react-redux'

class Main extends Component {

    state = {
        id: '',
        name: '',
        valid: true,
        free: [],
        btc: [],
        xrp: [],
        eth: [],
        bth: [],
        ltc: [],
        dash: [],
        newBoard: []
    }

    //todo to -> id
    mock = [
        {
            to: '/',
            title: '걔가 누군데?',
            time: '1분전',
            writer: '김성민',
            views: 20,
            good: true
        },
        {
            to: '/',
            title: '걔가 누군데?',
            time: '1분전',
            writer: '김성민',
            views: 20,
            good: true
        },
        {
            to: '/',
            title: '걔가 누군데?',
            time: '1분전',
            writer: '김성민',
            views: 20,
            good: false
        },
        {
            to: '/',
            title: '걔가 누군데?',
            time: '1분전',
            writer: '김성민',
            views: 20,
            good: true
        },
        {
            to: '/',
            title: '걔가 누군데?',
            time: '1분전',
            writer: '김성민',
            views: 20,
            good: false
        },
    ]

    componentDidMount() {
        this.props.getInfoRequest().then(() => {
            if(this.props.main.status === "SUCCESS"){
                this.setState({
                    id: this.props.main.id,
                    name: this.props.main.name,
                    valid: this.props.main.valid
                })
            }else{
                this.setState({
                    valid: this.props.main.valid
                })
            }
        })

        this.props.getPostRequest("free", 5).then(() => {
            if(this.props.post.status === "SUCCESS"){
                this.setState({
                    free: this.props.post.posts
                })
            }
        })
        this.props.getPostRequest("btc", 5).then(() => {
            if(this.props.post.status === "SUCCESS"){
                this.setState({
                    btc: this.props.post.posts
                })
            }
        })
        this.props.getPostRequest("xrp", 5).then(() => {
            if(this.props.post.status === "SUCCESS"){
                this.setState({
                    xrp: this.props.post.posts
                })
            }
        })
        this.props.getPostRequest("eth", 5).then(() => {
            if(this.props.post.status === "SUCCESS"){
                this.setState({
                    eth: this.props.post.posts
                })
            }
        })
        this.props.getPostRequest("bth", 5).then(() => {
            if(this.props.post.status === "SUCCESS"){
                this.setState({
                    bth: this.props.post.posts
                })
            }
        })
        this.props.getPostRequest("ltc", 5).then(() => {
            if(this.props.post.status === "SUCCESS"){
                this.setState({
                    ltc: this.props.post.posts
                })
            }
        })
        this.props.getPostRequest("dash", 5).then(() => {
            if(this.props.post.status === "SUCCESS"){
                this.setState({
                    dash: this.props.post.posts
                })
            }
        })
        this.props.getPostRequest("newBoard", 5).then(() => {
            if(this.props.post.status === "SUCCESS"){
                this.setState({
                    newBoard: this.props.post.posts
                })
            }
        })
    }
    


    render() {
        const {valid, free, btc, xrp, eth, bth, ltc, dash, newBoard} = this.state
        return (
            <div>
                <MainTemplate
                valid={valid}
                 Entire={<Entire title="전체 - HOT"   posts={this.mock} to='/entire'/>}
                 free={<Entire    title="자유게시판"      posts={free} to='/free'/>}
                 btc={<Entire    title="비트코인"      posts={btc} to='/btc'/>}
                 xrp={<Entire    title="리플"         posts={xrp} to='/xrp'/>}
                 eth={<Entire    title="이더리움"      posts={eth} to='/eth'/>}
                 bth={<Entire    title="비트코인캐시"  posts={bth} to='/bth'/>}
                 ltc={<Entire    title="라이트코인"     posts={ltc} to='/ltc' />}
                 dash={<Entire   title="대시"         posts={dash} to='/dash' />}
                 newBoard={<Entire title="새 게시판 요청" posts={newBoard} to='/newBoard'/>}
                 />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        main: state.auth.main,
        post: state.post.getPost
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInfoRequest: () => {
            return dispatch(getInfoRequest())
        },
        getPostRequest: (board, limit) => {
            return dispatch(getPostRequest(board, limit))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);