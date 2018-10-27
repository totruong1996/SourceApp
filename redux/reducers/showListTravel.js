import createReducer from '../helpers/createReduce'
import * as types from '../actions/types'

export const listTravel = createReducer({},{
    [types.LIST_TRAVEL](state, action){
        return action;
    }
});