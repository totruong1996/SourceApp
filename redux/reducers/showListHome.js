import createReducer from '../helpers/createReduce'
import * as types from '../actions/types'

export const listHome = createReducer({},{
    [types.LIST_HOME](state, action){
        return action;
    },
});