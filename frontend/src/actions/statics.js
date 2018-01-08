import {
    GET_STATICS,
    GET_STATICS_SUCCESS,
    GET_STATICS_FAILURE
} from './ActionTypes'
import axios from 'axios'

export function getStaticsRequest(){
    return dispatch => {
        dispatch(getStatics())

        return axios.post('/api/statics/get').then(res => {
            dispatch(getStaticsSuccess(res.data.count))
        }).catch(err => {
            dispatch(getStaticsFailure(err.response.data.code))
        })
    }
}

export function getStatics(){
    return {
        type: GET_STATICS
    }
}

export function getStaticsSuccess(count){
    return {
        type: GET_STATICS_SUCCESS,
        count
    }
}

export function getStaticsFailure(code){
    return {
        type: GET_STATICS_FAILURE,
        code
    }
}