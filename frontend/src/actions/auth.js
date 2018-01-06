import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
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

export function registerRequset(id, pw, email, name){
    return dispatch => {
        dispatch(register())
        return axios.post('/api/auth/register', (id, pw, email, name)).then(res => {
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