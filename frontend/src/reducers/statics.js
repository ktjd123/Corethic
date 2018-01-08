import {
    GET_STATICS,
    GET_STATICS_SUCCESS,
    GET_STATICS_SUCCESS
} from '../actions/ActionTypes'

const initialState = {
    get: {
        status: 'INIT',
        count: 0,
        error: -1
    }
}