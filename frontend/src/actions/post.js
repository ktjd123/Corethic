import {
    POST,
    POST_SUCCESS,
    POST_FAILURE,
    GET_POST,
    GET_POST_SUCCESS,
    GET_POST_FAILURE
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

export function getPostRequest(board, limit){
    return dispatch => {
        dispatch(getPost())
        return axios.post('/api/post/get', {board, limit}).then(res => {
            dispatch(getPostSuccess(res.data))
        }).catch(err => {
            dispatch(getPostFailure(err.response.data.code))
        })
    }
}

export function getPost(){
    return {
        type: GET_POST
    }
}

export function getPostSuccess(posts){
    return {
        type: GET_POST_SUCCESS,
        posts
    }
}

export function getPostFailure(code){
    return {
        type: GET_POST_FAILURE,
        code
    }
}