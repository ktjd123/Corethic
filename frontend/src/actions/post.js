import {
    POST,
    POST_SUCCESS,
    POST_FAILURE
} from './ActionTypes'
import axios from 'axios'

export function postRequest(title, content, board, type){
    return dispatch => {
        dispatch(post())
        return axios.post('/api/post/write', {title, content, board, type}).then(res => {
            dispatch(postSuccess())
        }).catch(err => {
            dispatch(postFailure(err.response.data.code))
        })
    }
}

export function post(){
    return {
        type: POST
    }
}

export function postSuccess(){
    return {
        type: POST_SUCCESS
    }
}

export function postFailure(code){
    return {
        type: POST_FAILURE,
        code
    }
}