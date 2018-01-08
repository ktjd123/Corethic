import React, { Component } from 'react';
import { BoardTemplate, Info } from 'components'
import { connect } from 'react-redux'
import { getInfoRequest } from 'actions/auth'

class Board extends Component {

    state = {
        valid: true
    }

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
    }

    render() {
        const { valid } = this.state
        const { board } = this.props.match.params
        return (
            <div>
                <BoardTemplate
                    valid={valid}
                    info={<Info board={board} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Board);