import React, { Component } from 'react';
import {DetailTemplate, Info, DetailC} from 'components'
import {getDetailRequest} from 'actions/post'
import {connect} from 'react-redux'

class Detail extends Component {
    render() {
        const {board, id} = this.props.match.params
        return (
            <div>
                <DetailTemplate
                    info={<Info board={board}/>}
                    detail={<DetailC id={id}/>}
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