import React, { Component } from 'react';
import {MainTemplate, Entire} from 'components'
import {getInfoRequest} from 'actions/auth'
import {connect} from 'react-redux'

class Main extends Component {


    //todo - to is going to be the _id of the post
    state = {
        id: '',
        name: '',
        valid: true
    }

    mock = [
        {
            to: '/',
            title: '걔가 누군데?',
            time: '1분전',
            writer: '김성민',
            views: 20
        },
        {
            to: '/',
            title: '걔가 누군데?',
            time: '1분전',
            writer: '김성민',
            views: 20
        },
        {
            to: '/',
            title: '걔가 누군데?',
            time: '1분전',
            writer: '김성민',
            views: 20
        },
        {
            to: '/',
            title: '걔가 누군데?',
            time: '1분전',
            writer: '김성민',
            views: 20
        },
        {
            to: '/',
            title: '걔가 누군데?',
            time: '1분전',
            writer: '김성민',
            views: 20
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
            }
        })
    }
    


    render() {
        return (
            <div>
                <MainTemplate
                valid={this.state.valid}
                 Entire={<Entire title="전체 - HOT" posts={this.mock}/>}
                 btc={<Entire title="비트코인" posts={this.mock}/>}
                 xrp={<Entire title="리플" posts={this.mock}/>}
                 eth={<Entire title="이더리움" posts={this.mock}/>}
                 bth={<Entire title="비트코인 캐시" posts={this.mock}/>}
                 ltc={<Entire title="라이트코인" posts={this.mock}/>}
                 dash={<Entire title="대시" posts={this.mock}/>}
                 newBoard={<Entire title="코인 게시판 요청" posts={this.mock}/>}
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);