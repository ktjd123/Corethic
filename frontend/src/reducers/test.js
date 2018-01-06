import * as types from 'actions/ActionTypes';
import update from 'react-addons-update'


const initialState = {
    string: 'test'
}

function test(state = initialState, action){

    switch(action.type){
        case types.TEST:
        return update(state, {
            string: {$set: 'redux test done!'}
        })

        default:
        return state;
    }
}

export default test;