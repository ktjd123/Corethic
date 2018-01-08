import{
    COMMENT,
    COMMENT_SUCCESS,
    COMMENT_FAILURE,
    GET_COMMENT,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_FAILURE
} from './ActionTypes'
import axios from 'axios'

export function commentRequest(id, content){
    return dispatch => {
        dispatch(comment())

        return axios.post('/api/comment/add', {id, content}).then(res => {
            dispatch(commentSuccess())
        }).catch(err => {
            dispatch(commentFailure(err.response.data.code))
        })
    }
}

export function comment(){
    return {
        type: COMMENT
    }
}

export function commentSuccess(){
    return {
        type: COMMENT_SUCCESS
    }
}

export function commentFailure(code){
    return {
        type: COMMENT_FAILURE,
        code
    }
}

export function getCommentRequest(id){
    return dispatch => {
        dispatch(getComment())

        return axios.post('/api/comment/get', {id}).then(res => {
            dispatch(getCommentSuccess(res.data))
        }).catch(err => {
            dispatch(getCommentFailure(err.response.data.code))
        })
    }
}

export function getComment(){
    return {
        type: GET_COMMENT
    }
}

export function getCommentSuccess(comments){
    return {
        type: GET_COMMENT_SUCCESS,
        comments
    }
}

export function getCommentFailure(code){
    return {
        type: GET_COMMENT_FAILURE,
        code
    }
}