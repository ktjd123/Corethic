import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    GET_INFO,
    GET_INFO_SUCCESS,
    GET_INFO_FAILURE
} from './ActionTypes'
import axios from 'axios'

export function loginRequest(id, pw){
    return dispatch => {
        dispatch(login())

        return axios.post('/api/auth/login', {id, pw}).then(res => {
            dispatch(loginSuccess())
        }).catch(err => {
            dispatch(loginFailure(err.response.data.code))
        })
    }
}

export function login(){
    return {
        type: LOGIN
    }
}

export function loginSuccess(){
    return {
        type: LOGIN_SUCCESS
    }
}

export function loginFailure(code){
    return {
        type: LOGIN_FAILURE,
        code
    }
}

export function registerRequest(id, pw, email, name){
    return dispatch => {
        dispatch(register())
        return axios.post('/api/auth/register', {id, pw, email, name}).then(res => {
            dispatch(registerSuccess())
        }).catch(err => {
            dispatch(registerFailure(err.response.data.code))
        })
    }
}

export function register(){
    return {
        type: REGISTER
    }
}

export function registerSuccess(){
    return {
        type: REGISTER_SUCCESS
    }
}

export function registerFailure(code){
    return {
        type: REGISTER_FAILURE,
        code
    }
}

export function getInfoRequest(){
    return dispatch => {
        dispatch(getInfo())
        return axios.get('/api/auth/info').then(res => {
            dispatch(getInfoSuccess(res.data.info))
        }).catch(err => {
            dispatch(getInfoFailure(err.response.data.code))
        })
    }
}

export function getInfo(){
    return {
        type: GET_INFO
    }
}

export function getInfoSuccess(info){
    return {
        type: GET_INFO_SUCCESS,
        info
    }
}

export function getInfoFailure(code){
    return {
        type: GET_INFO_FAILURE,
        code
    }
}