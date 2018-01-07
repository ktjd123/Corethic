import {
    POST,
    POST_SUCCESS,
    POST_FAILURE
} from '../actions/ActionTypes'
import update from 'react-addons-update'

const initialState = {
    post: {
        status: 'INIT',
        error: -1
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case POST:
        return update(state, {
            post: {
                status: {$set: 'PENDING'}
            }
        })

        case POST_SUCCESS:
        return update(state, {
            post: {
                status: {$set: 'SUCCESS'}
            }
        })

        case POST_FAILURE:
        return update(state, {
            post: {
                status: {$set: 'FAILURE'},
                error: {$set: action.code}
            }
        })

        default:
        return state
    }
}