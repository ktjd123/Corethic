import auth from './auth'
import post from './post'
import comment from './comment'
import statics from './statics'

import {combineReducers} from 'redux';

const reducers = combineReducers({
    auth,
    post,
    comment,
    statics
})

export default reducers