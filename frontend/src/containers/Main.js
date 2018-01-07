import React, { Component } from 'react';
import {MainTemplate, Entire} from 'components'
import {getInfoRequest} from 'actions/auth'
import {connect} from 'react-redux'

class Main extends Component {

    state = {
        id: '',
        name: '',
        valid: true
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
    }
    


    render() {
        const {valid} = this.state
        return (
            <div>
                <MainTemplate
                valid={valid}
                 Entire={<Entire title="전체 - HOT"   posts={this.mock} to='/entire'/>}
                 free={<Entire    title="자유게시판"      posts={this.mock} to='/free'/>}
                 btc={<Entire    title="비트코인"      posts={this.mock} to='/btc'/>}
                 xrp={<Entire    title="리플"         posts={this.mock} to='/xrp'/>}
                 eth={<Entire    title="이더리움"      posts={this.mock} to='/eth'/>}
                 bth={<Entire    title="비트코인캐시"  posts={this.mock} to='/bth'/>}
                 ltc={<Entire    title="라이트코인"     posts={this.mock} to='/ltc' />}
                 dash={<Entire   title="대시"         posts={this.mock} to='/dash' />}
                 newBoard={<Entire title="새 게시판 요청" posts={this.mock} to='/newBoard'/>}
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