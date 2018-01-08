import {
    COMMENT,
    COMMENT_SUCCESS,
    COMMENT_FAILURE,
    GET_COMMENT,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_FAILURE
} from '../actions/ActionTypes'
import update from 'react-addons-update'

const initialState = {
    add: {
        status: 'INIT',
        error: -1
    },
    get: {
        status: 'INIT',
        comments: [],
        error: -1
    }
}

export default function comment(state = initialState, action){
    switch(action.type){
        case COMMENT:
        return update(state, {
            add: {
                status: {$set: 'PENDING'}
            }
        })
        case COMMENT_SUCCESS:
        return update(state, {
            add: {
                status: {$set: 'SUCCESS'}
            }
        })

        case COMMENT_FAILURE:
        return update(state, {
            add: {
                status: {$set: 'FAILURE'},
                error: {$set: action.code}
            }
        })

        case GET_COMMENT:
        return update(state, {
            get: {
                status: {$set: 'PENDING'}
            }
        })

        case GET_COMMENT_SUCCESS:
        return update(state, {
            get: {
                status: {$set: 'SUCCESS'},
                comments: {$set: action.comments}
            }
        })

        case GET_COMMENT_FAILURE:
        return update(state, {
            get: {
                status: {$set: 'FAILURE'},
                error: {$set: action.code}
            }
        })

        default:
        return state
    }
}