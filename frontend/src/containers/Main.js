import React, { Component } from 'react';
import {MainTemplate, Entire} from 'components'

import {List, Map} from 'immutable'

class Main extends Component {

    state = List([
        Map({
            to: '',
            title: '',
            time: '',
            writer: '',
            views: 0
        })
    ])

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

    render() {
        return (
            <div>
                <MainTemplate
                 Entire={<Entire title="HOT" posts={this.mock}/>}
                 notice={<Entire title="공지사항" posts={this.mock}/>}
                 />
            </div>
        );
    }
}

export default Main;