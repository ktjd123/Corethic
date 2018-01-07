import auth from './auth'
import post from './post'

import {combineReducers} from 'redux';

const reducers = combineReducers({
    auth,
    post
})

export default reducers