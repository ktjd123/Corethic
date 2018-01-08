import auth from './auth'
import post from './post'
import comment from './comment'

import {combineReducers} from 'redux';

const reducers = combineReducers({
    auth,
    post,
    comment
})

export default reducers