import React, { Component } from 'react';
import './BoardList.css'
import { Post } from 'components'

class BoardList extends Component {
    render() {
        const { posts } = this.props
        const postList = posts.map(post => {
            return (
                <Post
                    to={post._id}
                    title={post.title}
                    time={post.date}
                    writer={post.writer}
                    views={post.views}
                    good={post.type}
                    board={post.board}
                    key={post._id}
                />
            )
        })
        return (
            <div className='boardList' >
                <div className='cardList'>
                    {postList}
                </div>
            </div>
        );
    }
}

export default BoardList;