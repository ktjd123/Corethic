import {
    GET_STATICS,
    GET_STATICS_SUCCESS,
    GET_STATICS_FAILURE
} from '../actions/ActionTypes'
import update from 'react-addons-update'

const initialState = {
    get: {
        status: 'INIT',
        count: 0,
        error: -1
    }
}

export default function (state=initialState, action){
    switch(action.type){
        case GET_STATICS:
        return update(state, {
            get: {
                status: {$set: 'PENDING'}
            }
        })

        case GET_STATICS_SUCCESS:
        return update(state, {
            get: {
                status: {$set: 'SUCCESS'},
                count: {$set: action.count}
            }
        })

        case GET_STATICS_FAILURE:
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