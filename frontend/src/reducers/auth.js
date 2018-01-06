import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions/ActionTypes'
import update from 'react-addons-update'

const initialState = {
    login: {
        status: 'INIT',
        error: -1
    },
    register: {
        status: 'INIT',
        error: -1
    },
    main: {
        valid: false,
        id: '',
        name: '',
    }
}

export default function(state=initialState, action){
    switch(action.type){

        case LOGIN:
        return update(state, {
            login: {
                status: {$set: 'PENDING'},
            }
        })
        case LOGIN_SUCCESS:
        return update(state, {
            login: {
                status: {$set: 'SUCCESS'}
            },
        })
        case LOGIN_FAILURE:
        return update(state, {
            login: {
                status: {$set: 'FAILURE'},
                error: {$set: action.code}
            },
        })
        case REGISTER:
        return update(state, {
            register: {
                status: {$set: 'PENDING'}
            }
        })
        case REGISTER_SUCCESS:
        return update(state, {
            register: {
                status: {$set: 'SUCCESS'}
            }
        })
        case REGISTER_FAILURE:
        return update({
            register: {
                status: {$set: 'FAILURE'},
                error: {$set: action.err}
            }
        })

        default: 
        return state
    }
}