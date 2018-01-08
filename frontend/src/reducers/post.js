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
} from '../actions/ActionTypes'
import update from 'react-addons-update'

const initialState = {
    post: {
        status: 'INIT',
        error: -1
    },
    getPost: {
        status: 'INIT',
        posts: [],
        error: -1
    },
    detail: {
        status: 'INIT',
        post: undefined,
        error: -1
    },
    getTime: {
        status: 'INIT',
        posts: [],
        error: -1
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case POST:
        return update(state, {
            post: {
                status: {$set: 'PENDING'}
            }
        })

        case POST_SUCCESS:
        return update(state, {
            post: {
                status: {$set: 'SUCCESS'}
            }
        })

        case POST_FAILURE:
        return update(state, {
            post: {
                status: {$set: 'FAILURE'},
                error: {$set: action.code}
            }
        })

        case GET_POST:
        return update(state, {
            getPost: {
                status: {$set: 'PENDING'}
            }
        })

        case GET_POST_SUCCESS:
        return update(state, {
            getPost: {
                status: {$set: 'SUCCESS'},
                posts: {$set: action.posts}
            }
        })

        case GET_POST_FAILURE:
        return update(state, {
            getPost: {
                status: {$set: 'FAILURE'},
                error: {$set: action.code}
            }
        })

        case GET_DETAIL:
        return update(state, {
            detail: {
                status: {$set: 'PENDING'}
            }
        })

        case GET_DETAIL_SUCCESS:
        return update(state, {
            detail: {
                status: {$set: 'SUCCESS'},
                post: {$set: action.post}
            }
        })

        case GET_DETAIL_FAILURE:
        return update(state, {
            detail: {
                status: {$set: 'FAILURE'},
                error: {$set: action.code}
            }
        })

        case GET_BY_TIME:
        return update(state, {
            getTime: {
                status: {$set: 'PENDING'}
            }
        })

        case GET_BY_TIME_SUCCESS:
        return update(state, {
            getTime: {
                status: {$set: 'SUCCESS'},
                posts: {$set: action.posts}
            }
        })

        case GET_BY_TIME_FAILURE:
        return update(state, {
            getTime: {
                status: {$set: 'FAILURE'},
                error: {$set: action.code}
            }
        })

        default:
        return state
    }
}