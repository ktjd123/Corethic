import React, { Component } from 'react';
import {DetailTemplate, Info} from 'components'

class Detail extends Component {
    render() {
        const {board, id} = this.props.match.params
        return (
            <div>
                <DetailTemplate
                    info={<Info board={board}/>}
                />
            </div>
        );
    }
}

export default Detail;