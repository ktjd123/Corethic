import {
    POST,
    POST_SUCCESS,
    POST_FAILURE,
    GET_POST,
    GET_POST_SUCCESS,
    GET_POST_FAILURE,
    GET_DETAIL,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAILURE,
    GET_BY_TIME,
    GET_BY_TIME_SUCCESS,
    GET_BY_TIME_FAILURE
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

export function getDetailRequest(id){
    return dispatch => {
        dispatch(getDetail())
        return axios.post('/api/post/detail', {id}).then(res => {
            dispatch(getDetailSuccess(res.data))
        }).catch(err => {
            dispatch(getDetailFailure(err.response.data.code))
        })
    }
}

export function getDetail(){
    return {
        type: GET_DETAIL
    }
}

export function getDetailSuccess(post){
    return {
        type: GET_DETAIL_SUCCESS,
        post
    }
}

export function getDetailFailure(code){
    return {
        type: GET_DETAIL_FAILURE,
        code
    }
}

export function getByTimeRequest(board, limit){
    return dispatch => {
        dispatch(getByTime())
        return axios.post('/api/post/getByTime', {board,limit}).then(res => {
            dispatch(getByTimeSuccess(res.data))
        }).catch(err => {
            dispatch(getByTimeFailure(err.response.data.code))
        })
    }
}

export function getByTime(){
    return{
        type: GET_BY_TIME
    }
}

export function getByTimeSuccess(posts){
    return{
        type: GET_BY_TIME_SUCCESS,
        post
    }
}

export function getByTimeFailure(code){
    return {
        type: GET_BY_TIME_FAILURE,
        code
    }
}